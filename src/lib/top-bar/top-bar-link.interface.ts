
export interface HmnTopBarLink {

	title?: string;
	icon?: string;
	link?: string;
	disable?: boolean;
	isExternal?: boolean;
	children?: HmnTopBarLink[];
}
