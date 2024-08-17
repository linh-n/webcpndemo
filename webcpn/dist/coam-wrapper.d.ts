import { LitElement } from 'lit';
import { Task } from '@lit/task';
type SidebarMainLink = {
    app: string;
    label: string;
    href: string;
    icon?: string;
};
type SidebarSubLink = {
    label: string;
    href: string;
};
export declare class CoamWrapper extends LitElement {
    app: string;
    links: SidebarSubLink[];
    _loadMenuTask: Task<never[], {
        menuItems: SidebarMainLink[];
    }>;
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