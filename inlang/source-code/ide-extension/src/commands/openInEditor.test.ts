import { beforeEach, describe, expect, it, vi } from "vitest"
import { Uri, env } from "vscode"
import { openInFinkCommand } from "./openInFink.js"
import { CONFIGURATION } from "../configuration.js"
import { getGitOrigin } from "../utilities/settings/getGitOrigin.js"

vi.mock("vscode", () => ({
	workspace: {
		getConfiguration: vi.fn().mockReturnValue({
			get: vi.fn().mockReturnValue("test"),
		}),
		workspaceFolders: [],
	},
	commands: {
		registerCommand: vi.fn(),
	},
	env: {
		openExternal: vi.fn(),
	},
	Uri: {
		parse: vi.fn(),
	},
	EventEmitter: vi.fn(),
}))

vi.mock("../utilities/settings/getGitOrigin.js", () => ({
	getGitOrigin: vi.fn(),
}))

describe("openInFinkCommand", () => {
	beforeEach(() => {
		vi.clearAllMocks()

		vi.mocked(getGitOrigin).mockResolvedValue("https://github.com/user/repo")
	})

	it("should open the editor with message id in URL", async () => {
		const mockArgs = { messageId: "testMessageId", selectedProjectPath: "/test/path" }

		await openInFinkCommand.callback(mockArgs)

		expect(env.openExternal).toHaveBeenCalledWith(
			Uri.parse(
				`${
					CONFIGURATION.STRINGS.EDITOR_BASE_URL
				}https://github.com/user/repo?project=${encodeURIComponent(
					mockArgs.selectedProjectPath
				)}&id=${encodeURIComponent(mockArgs.messageId)}`
			)
		)
	})

	it("should handle failure to get Git origin", async () => {
		const mockArgs = { messageId: "testMessageId", selectedProjectPath: "/test/path" }
		vi.mocked(getGitOrigin).mockResolvedValue(undefined) // Simulate failure

		await openInFinkCommand.callback(mockArgs)

		expect(env.openExternal).toHaveBeenCalledWith(
			Uri.parse(`${CONFIGURATION.STRINGS.EDITOR_BASE_URL}`)
		)
	})
})
