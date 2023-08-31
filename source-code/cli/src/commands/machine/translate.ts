import { Command } from "commander"
import { rpc } from "@inlang/rpc"
import { getInlangProject } from "../../utilities/getInlangProject.js"
import { log } from "../../utilities/log.js"
import type { InlangProject } from "@inlang/sdk"
import prompts from "prompts"

export const translate = new Command()
	.command("translate")
	.option("-f, --force", "Force machine translation and skip the confirmation prompt.", false)
	.description("Machine translate all resources.")
	.action(async (args: { force: boolean }) => {
		try {
			// Prompt the user to confirm
			if (!args.force) {
				log.warn(
					"Human translations are better than machine translations. \n\nWe advise to use machine translations in the build step without commiting them to the repo. By using machine translate in the build step, you avoid missing translations in production while still flagging to human translators that transaltions are missing. You can use the force flag (-f, --force) to skip this prompt warning.",
				)
				const response = await prompts({
					type: "confirm",
					name: "value",
					message: "Are you sure you want to machine translate?",
				})
				if (!response.value) {
					log.info("🚫 Aborting machine translation.")
					return
				}
			}

			// Get the config
			const { data: inlang, error } = await getInlangProject()

			if (error) {
				log.error(error)
				// no message because that's handled in getInlangProject
				return
			}

			translateCommandAction({ inlang })
		} catch (error) {
			log.error(error)
		}
	})

export async function translateCommandAction(args: { inlang: InlangProject }) {
	try {
		const inlangConfig = args.inlang.config()

		if (!inlangConfig) {
			log.error(`❌ No inlang config found, please add a project.inlang.json file`)
			return
		}
		const sourceLanguageTag = inlangConfig.sourceLanguageTag
		// Get languages to translate to with the reference language removed

		const languagesTagsToTranslateTo = inlangConfig.languageTags.filter(
			// @ts-ignore - type mismtach - fix after refactor
			(tag) => tag !== sourceLanguageTag,
		)

		log.info(`📝 Translating to ${languagesTagsToTranslateTo.length} languages.`)

		// parallelize in the future
		for (const id of args.inlang.query.messages.includedMessageIds()) {
			const { data: translatedMessage, error } = await rpc.machineTranslateMessage({
				message: args.inlang.query.messages.get({ where: { id } })!,
				sourceLanguageTag: sourceLanguageTag,
				targetLanguageTags: languagesTagsToTranslateTo,
			})
			if (error) {
				log.error(`❌ Couldn't translate message "${id}": ${error}`)
				continue
			}

			args.inlang.query.messages.update({ where: { id: id }, data: translatedMessage! })
			log.info(`✅ Machine translated message "${id}"`)
		}
		// Log the message counts
		log.info("Machine translate complete.")
	} catch (error) {
		log.error(error)
	}
}
