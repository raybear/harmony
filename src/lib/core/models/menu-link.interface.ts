
export interface HmnMenuLink {

	title?: string;
	icon?: string;
	link?: string;
	disable?: boolean;
	isExternal?: boolean;
	children?: HmnMenuLink[];
}
