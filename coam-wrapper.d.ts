import { LitElement } from 'lit';
type SidebarSubLink = {
    label: string;
    href: string;
};
export declare class CoamWrapper extends LitElement {
    app: string;
    links: SidebarSubLink[];
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'coam-wrapper': CoamWrapper;
    }
}
export {};
//# sourceMappingURL=coam-wrapper.d.ts.map