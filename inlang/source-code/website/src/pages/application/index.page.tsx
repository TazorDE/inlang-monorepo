import { Meta, Title } from "@solidjs/meta"
import Gridview from "#src/components/marketplace/Gridview.jsx"
import MarketplaceLayout from "#src/components/marketplace/MarketplaceLayout.jsx"
import SubcategoryPills from "#src/components/marketplace/SubcategoryPills.tsx.jsx"

export function Page() {
	const getSubCategies = [
		{
			name: "Svelte",
			param: "svelte",
			icon: <IconSvelte class="-ml-1 w-5 h-5" />,
		},
		{
			name: "React",
			param: "react",
			icon: <IconReact class="-ml-1 w-5 h-5" />,
		},
		{
			name: "Next.js",
			param: "nextjs",
			icon: <IconNextjs class="-ml-1 w-5 h-5" />,
		},
		{
			name: "Vue",
			param: "vue",
			icon: <IconVue class="-ml-1 w-5 h-5" />,
		},
		{
			name: "Javascript",
			param: "javascript",
			icon: <IconJavascript class="-ml-1 w-5 h-5" />,
		},
		{
			name: "Flutter",
			param: "flutter",
			icon: <IconFlutter class="-ml-1 w-5 h-5" />,
		},
	]
	return (
		<>
			<Title>Global Application</Title>
			<Meta name="description" content="Globalization infrastructure for software" />
			<Meta name="og:image" content="/images/inlang-marketplace-image.jpg" />
			<MarketplaceLayout>
				<div class="pt-4 text-sm font-medium flex items-center gap-3">
					<p class="pr-4 text-surface-400">Categories:</p>
					<SubcategoryPills links={getSubCategies} />
				</div>

				<div class="pb-16 md:pb-20 min-h-screen relative">
					<h2 class="text-md text-surface-600 pb-4 pt-8">All Products</h2>
					<Gridview />
				</div>
			</MarketplaceLayout>
			´{" "}
		</>
	)
}

export const IconSvelte = (props: { class: string }) => {
	return (
		<svg
			width={32}
			height={32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class={props.class}
			preserveAspectRatio="none"
		>
			<path
				d="M26.4683 5.69988C25.1572 3.90086 23.2242 2.65343 21.0448 2.19992C18.8654 1.74641 16.5952 2.11921 14.6753 3.24588L7.95829 7.39988C7.05794 7.94246 6.28241 8.66917 5.68251 9.53239C5.08262 10.3956 4.67191 11.3759 4.47729 12.4089C4.15795 14.1368 4.44029 15.9219 5.27729 17.4669C4.70369 18.3103 4.31173 19.2639 4.12629 20.2669C3.9354 21.314 3.96115 22.3891 4.20194 23.4259C4.44273 24.4627 4.89345 25.4391 5.52629 26.2949C6.83742 28.0941 8.77031 29.3419 10.9497 29.7961C13.1291 30.2503 15.3996 29.8785 17.3203 28.7529L24.0383 24.5999C24.9384 24.057 25.7137 23.3301 26.3135 22.467C26.9134 21.6038 27.3243 20.6238 27.5193 19.5909C27.8406 17.8617 27.5582 16.0747 26.7193 14.5289C27.2935 13.6856 27.6858 12.7321 27.8713 11.7289C28.0621 10.6814 28.0361 9.60594 27.7948 8.56894C27.5535 7.53194 27.102 6.55546 26.4683 5.69988Z"
				fill="#FF3E00"
			/>
			<path
				d="M14.0201 26.6396C12.9698 26.9089 11.8629 26.8567 10.8426 26.4896C9.82242 26.1224 8.93596 25.4574 8.29811 24.5806C7.91618 24.0666 7.64384 23.4796 7.49797 22.8561C7.35211 22.2325 7.33582 21.5857 7.45011 20.9556C7.48814 20.7486 7.54128 20.5448 7.60911 20.3456L7.73611 19.9706L8.08011 20.2086C8.87865 20.7773 9.76699 21.208 10.7081 21.4826L10.9531 21.5556L10.9281 21.7926C10.8993 22.1373 10.9955 22.4809 11.1991 22.7606C11.3905 23.0313 11.6599 23.2371 11.9713 23.3508C12.2827 23.4644 12.6214 23.4804 12.9421 23.3966C13.087 23.3589 13.2255 23.2999 13.3531 23.2216L20.0531 19.0676C20.2163 18.9687 20.3569 18.8367 20.4659 18.6801C20.5749 18.5236 20.6499 18.3459 20.6861 18.1586C20.7221 17.9697 20.7191 17.7755 20.6771 17.5878C20.6352 17.4002 20.5552 17.2231 20.4421 17.0676C20.2497 16.8031 19.9824 16.6024 19.6746 16.4915C19.3669 16.3806 19.033 16.3646 18.7161 16.4456C18.5704 16.4833 18.4312 16.5426 18.3031 16.6216L15.7311 18.2056C15.3084 18.4672 14.8485 18.6634 14.3671 18.7876C13.316 19.0576 12.208 19.0056 11.1868 18.6383C10.1656 18.271 9.27836 17.6053 8.64011 16.7276C8.26071 16.2119 7.9912 15.6238 7.84826 14.9998C7.70532 14.3757 7.692 13.729 7.80911 13.0996C7.92714 12.4796 8.17409 11.8912 8.53395 11.3727C8.89381 10.8542 9.35856 10.4171 9.89811 10.0896L16.6061 5.93558C17.0289 5.67429 17.4888 5.47841 17.9701 5.35458C19.0213 5.08392 20.1295 5.13553 21.1509 5.5027C22.1724 5.86987 23.0598 6.53564 23.6981 7.41358C24.08 7.92762 24.3523 8.51458 24.4982 9.13811C24.644 9.76164 24.6603 10.4085 24.5461 11.0386C24.5082 11.2456 24.4551 11.4494 24.3871 11.6486L24.2601 12.0236L23.9161 11.7866C23.118 11.2171 22.2296 10.7864 21.2881 10.5126L21.0431 10.4386L21.0681 10.2016C21.0969 9.85669 21.0003 9.513 20.7961 9.23358C20.6042 8.96872 20.3371 8.76775 20.0294 8.65681C19.7218 8.54588 19.3879 8.53011 19.0711 8.61158C18.926 8.64915 18.7874 8.70849 18.6601 8.78758L11.9381 12.9276C11.7749 13.026 11.6344 13.1577 11.5256 13.3142C11.4169 13.4707 11.3424 13.6483 11.3071 13.8356C11.2701 14.0246 11.2727 14.2192 11.3147 14.4071C11.3567 14.5951 11.4372 14.7723 11.5511 14.9276C11.7436 15.1919 12.011 15.3924 12.3188 15.5031C12.6265 15.6138 12.9603 15.6297 13.2771 15.5486C13.4226 15.5107 13.5617 15.4518 13.6901 15.3736L16.2521 13.7886C16.6747 13.5269 17.1346 13.3309 17.6161 13.2076C18.6673 12.9375 19.7753 12.9894 20.7967 13.3565C21.818 13.7236 22.7055 14.3891 23.3441 15.2666C23.725 15.7811 23.9964 16.3682 24.1414 16.9917C24.2864 17.6152 24.3019 18.2618 24.1871 18.8916C24.0699 19.5123 23.8233 20.1014 23.4634 20.6205C23.1035 21.1396 22.6383 21.5771 22.0981 21.9046L15.3911 26.0586C14.9685 26.3203 14.5086 26.5162 14.0271 26.6396"
				fill="white"
			/>
		</svg>
	)
}
export const IconReact = (props: { class: string }) => {
	return (
		<svg
			width={32}
			height={32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class={props.class}
			preserveAspectRatio="none"
		>
			<path
				d="M16 18.4736C17.3807 18.4736 18.5 17.3543 18.5 15.9736C18.5 14.5929 17.3807 13.4736 16 13.4736C14.6193 13.4736 13.5 14.5929 13.5 15.9736C13.5 17.3543 14.6193 18.4736 16 18.4736Z"
				fill="#00D8FF"
			/>
			<path
				d="M16 21.7063C12.9951 21.779 9.99779 21.3739 7.12 20.5063C5.79062 20.0849 4.55073 19.421 3.463 18.5483C3.04793 18.2501 2.70227 17.8657 2.44974 17.4214C2.19721 16.9771 2.04379 16.4834 2 15.9743C2 14.3213 3.816 12.7013 6.858 11.6413C9.81273 10.702 12.8999 10.2468 16 10.2933C19.0587 10.2505 22.1045 10.6975 25.022 11.6173C26.3023 12.0254 27.5001 12.6572 28.56 13.4833C28.968 13.7675 29.3084 14.138 29.5573 14.5685C29.8061 14.9989 29.9573 15.4789 30 15.9743C30 17.6923 27.97 19.4333 24.7 20.5153C21.8779 21.3546 18.9438 21.7563 16 21.7063ZM16 11.4893C13.0341 11.4496 10.0808 11.8824 7.251 12.7713C4.451 13.7483 3.196 15.0843 3.196 15.9713C3.196 16.8993 4.545 18.3583 7.507 19.3713C10.2601 20.1971 13.1266 20.5816 16 20.5103C18.8164 20.5606 21.6239 20.1796 24.325 19.3803C27.4 18.3613 28.8 16.9003 28.8 15.9743C28.7495 15.6565 28.6337 15.3526 28.4599 15.0819C28.2861 14.8111 28.058 14.5794 27.79 14.4013C26.8418 13.6684 25.7717 13.1085 24.629 12.7473C21.838 11.871 18.925 11.4463 16 11.4893Z"
				fill="#00D8FF"
			/>
			<path
				d="M10.3196 28.4435C9.85311 28.4542 9.39211 28.341 8.98361 28.1155C7.55161 27.2895 7.05561 24.9075 7.65661 21.7425C8.31926 18.7136 9.46741 15.8118 11.0566 13.1495C12.5473 10.4786 14.4558 8.06337 16.7096 5.99546C17.7028 5.09017 18.8485 4.368 20.0936 3.86246C20.544 3.6514 21.0352 3.54199 21.5326 3.54199C22.03 3.54199 22.5212 3.6514 22.9716 3.86246C24.4606 4.72046 24.9536 7.34846 24.2586 10.7215C23.5755 13.586 22.4572 16.3289 20.9426 18.8545C19.5043 21.4938 17.656 23.888 15.4666 25.9475C14.4374 26.8882 13.2429 27.6304 11.9436 28.1365C11.4234 28.3295 10.8744 28.4333 10.3196 28.4435ZM12.0926 13.7435C10.5767 16.2928 9.47627 19.0672 8.83261 21.9625C8.27961 24.8775 8.81061 26.6305 9.58261 27.0765C10.3826 27.5395 12.3246 27.1005 14.6826 25.0405C16.7726 23.0674 18.5368 20.7757 19.9096 18.2505C21.3605 15.836 22.4333 13.2136 23.0906 10.4745C23.7446 7.29946 23.1796 5.35546 22.3776 4.89346C22.077 4.77829 21.7558 4.72673 21.4343 4.74205C21.1127 4.75737 20.7979 4.83923 20.5096 4.98246C19.4013 5.43981 18.3823 6.08909 17.4996 6.90046C15.3463 8.88125 13.5233 11.1934 12.0996 13.7495L12.0926 13.7435Z"
				fill="#00D8FF"
			/>
			<path
				d="M21.6761 28.456C20.3211 28.456 18.6001 27.636 16.8081 26.095C14.5148 24.0083 12.574 21.5644 11.0611 18.858C9.4918 16.2323 8.35274 13.3725 7.68707 10.387C7.39838 9.07347 7.34488 7.71917 7.52907 6.38698C7.57165 5.89279 7.72213 5.41395 7.9699 4.98424C8.21767 4.55453 8.5567 4.18441 8.96307 3.89998C10.4501 3.03898 12.9731 3.92398 15.5481 6.20998C17.6887 8.23216 19.5065 10.5707 20.9381 13.144C22.5064 15.7083 23.6574 18.5055 24.3481 21.431C24.6492 22.7927 24.6956 24.1984 24.4851 25.577C24.435 26.0854 24.2755 26.5769 24.0176 27.018C23.7598 27.459 23.4096 27.839 22.9911 28.132C22.5892 28.3547 22.1354 28.4665 21.6761 28.456ZM12.0961 18.256C13.5475 20.8424 15.4014 23.1813 17.5881 25.185C19.8371 27.12 21.6211 27.536 22.3881 27.085C23.1881 26.62 23.7781 24.722 23.1701 21.651C22.5039 18.8579 21.4 16.1879 19.8991 13.74C18.5329 11.2771 16.7978 9.03784 14.7541 7.09998C12.3301 4.94798 10.3641 4.46698 9.56307 4.93098C9.31341 5.13386 9.10854 5.3863 8.96137 5.67237C8.81421 5.95843 8.72796 6.2719 8.70807 6.59298C8.54907 7.78107 8.60087 8.98788 8.86107 10.158C9.50137 13.0131 10.5938 15.7476 12.0971 18.258L12.0961 18.256Z"
				fill="#00D8FF"
			/>
		</svg>
	)
}

export const IconNextjs = (props: { class: string }) => {
	return (
		<svg
			width={32}
			height={32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class={props.class}
			preserveAspectRatio="none"
		>
			<g clip-path="url(#clip0_1628_1676)">
				<path
					d="M16 0C7.175 0 0 7.175 0 16C0 24.825 7.175 32 16 32C18.8 32 21.425 31.275 23.7 30.025L12.1 13.825V22.975H10.4V10.45H12.1L24.725 29.4C29.1 26.55 32 21.625 32 16C32 7.175 24.825 0 16 0ZM21.525 21.15L19.65 18.325V10.45H21.525V21.15Z"
					fill="black"
				/>
			</g>
			<defs>
				<clipPath id="clip0_1628_1676">
					<rect width={32} height={32} fill="white" />
				</clipPath>
			</defs>
		</svg>
	)
}

export const IconVue = (props: { class: string }) => {
	return (
		<svg
			width={32}
			height={32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class={props.class}
			preserveAspectRatio="none"
		>
			<path
				d="M24.4 3.9248H30L16 28.0748L2 3.9248H12.71L16 9.5248L19.22 3.9248H24.4Z"
				fill="#41B883"
			/>
			<path d="M2 3.9248L16 28.0748L30 3.9248H24.4L16 18.4148L7.53 3.9248H2Z" fill="#41B883" />
			<path
				d="M7.53125 3.9248L16.0012 18.4848L24.4012 3.9248H19.2212L16.0012 9.5248L12.7112 3.9248H7.53125Z"
				fill="#35495E"
			/>
		</svg>
	)
}

export const IconJavascript = (props: { class: string }) => {
	return (
		<svg
			width={32}
			height={32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class={props.class}
			preserveAspectRatio="none"
		>
			<path d="M2 2H30V30H2V2Z" fill="#F5DE19" />
			<path
				d="M20.812 23.8754C21.0506 24.36 21.4212 24.7673 21.8812 25.0504C22.3412 25.3335 22.8719 25.4808 23.412 25.4754C24.502 25.4754 25.199 24.9304 25.199 24.1754C25.199 23.2754 24.483 22.9534 23.283 22.4284L22.625 22.1464C20.725 21.3374 19.465 20.3244 19.465 18.1824C19.465 16.2094 20.965 14.7064 23.318 14.7064C24.0797 14.6514 24.8407 14.8219 25.5062 15.1966C26.1716 15.5713 26.712 16.1336 27.06 16.8134L25.003 18.1284C24.869 17.7913 24.6357 17.5029 24.3341 17.3015C24.0324 17.1 23.6767 16.995 23.314 17.0004C23.1558 16.9846 22.996 17.0018 22.8448 17.0512C22.6936 17.1005 22.5543 17.1808 22.4359 17.2869C22.3174 17.393 22.2224 17.5227 22.1568 17.6675C22.0912 17.8124 22.0566 17.9694 22.055 18.1284C22.055 18.9174 22.544 19.2374 23.673 19.7284L24.331 20.0104C26.567 20.9694 27.831 21.9464 27.831 24.1434C27.831 26.5124 25.97 27.8104 23.471 27.8104C22.4973 27.8724 21.5265 27.6514 20.6756 27.1739C19.8248 26.6964 19.1303 25.9828 18.676 25.1194L20.812 23.8754ZM11.517 24.1034C11.93 24.8364 12.306 25.4564 13.21 25.4564C14.074 25.4564 14.62 25.1184 14.62 23.8034V14.8564H17.251V23.8384C17.251 26.5624 15.651 27.8024 13.322 27.8024C12.4988 27.8474 11.6812 27.6422 10.9767 27.2139C10.2722 26.7855 9.71386 26.154 9.375 25.4024L11.517 24.1034Z"
				fill="black"
			/>
		</svg>
	)
}

export const IconFlutter = (props: { class: string }) => {
	return (
		<svg
			width={32}
			height={32}
			viewBox="0 0 32 32"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			class={props.class}
			preserveAspectRatio="none"
		>
			<path
				d="M15.3828 18.316L18.7438 15.042H27.0928L19.6968 22.438L15.3828 18.316Z"
				fill="#40D0FD"
			/>
			<path
				d="M4.90625 16.1251L9.10525 20.4241L27.0923 2.28711H18.7432L4.90625 16.1251Z"
				fill="#41D0FD"
			/>
			<path
				d="M11.1797 22.4794L15.4387 26.6754L19.7007 22.4384L15.3867 18.3164L11.1797 22.4794Z"
				fill="#1FBCFD"
			/>
			<path
				d="M15.4375 26.6755L19.6995 22.4385L26.9915 29.8135H18.5955L15.4375 26.6755Z"
				fill="#095A9D"
			/>
			<path d="M15.4375 26.6746L19.4085 25.3536L18.0705 24.0566L15.4375 26.6746Z" fill="#0E5199" />
		</svg>
	)
}
