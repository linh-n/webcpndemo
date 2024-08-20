import {LitElement, html, css} from 'lit';
import {Task} from '@lit/task';
import {customElement, property} from 'lit/decorators.js';
import {unsafeHTML} from 'lit/directives/unsafe-html.js';

type SidebarMainLink = {
  app: string;
  label: string;
  href: string;
  icon?: string;
};

@customElement('coam-wrapper')
export class CoamWrapper extends LitElement {
  @property({})
  app = '';

  _loadMenuTask = new Task(this, {
    args: () => [],
    task: async (_, {signal}) => {
      const response = await fetch(
        `https://webcpndemo-menusvc.vercel.app/api/menu`,
        {signal}
      );
      if (!response.ok) {
        throw new Error(response.status.toString());
      }
      return response.json() as unknown as { menuItems: SidebarMainLink[] };
    },
  });

  override render() {
    return html`
        <div class="appbar">
          <div class="nav">
            <slot name="logo"></slot>
          </div>
        </div>
        <div class="sidebar">
          ${this._loadMenuTask.render({
            pending: () => ``,
            complete: (menu) => html`
              <ul class="main">
                ${menu.menuItems.map(
                  (app) => html`
                    <li class="main-item ${this.app === app.app ? 'active' : ''}">
                      ${unsafeHTML(app.icon)}
                      <a href="${app.href}">${app.label}</a>
                    </li>
                    ${this.app === app.app
                      ? html`<li class="sub"><slot name="sidebar"></slot></li>`
                      : ''}
                  `
                )}
              </ul>
            `,
            error: (error) => html`<p>Oops, something went wrong: ${error}</p>`,
          })}
        </div>
        <div class="content">
          <slot></slot>
        </div>
      </div>
    `;
  }

  static override styles = css`
    :host {
      color: #424242;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
        Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
      font-size: 13px;
      display: grid;
      grid-template-areas:
        'appbar appbar'
        'sidebar content';
      grid-template-columns: 250px 1fr;
      grid-template-rows: 50px 1fr;
      gap: 0;
      height: 100vh;
    }

    ul {
      list-style: none;
    }

    a {
      text-decoration: none;
      color: inherit;
    }

    .sidebar {
      grid-area: sidebar;
      overflow-y: auto;
      background-color: #fafafa;
    }

    .appbar {
      grid-area: appbar;
      /* background-color: #2196f3; */
      background-color: red;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 20px;
    }

    .appbar .nav {
      display: flex;
      gap: 20px;
      height: 100%;
      align-items: center;
    }

    .sidebar .main {
      list-style: none;
      padding: 20px 20px 20px 0;
      margin: 0;
      font-size: 1.1em;
    }

    .sidebar .main li.main-item {
      padding: 10px 20px;
      margin: 10px 0 10px 0;
      display: flex;
      align-items: center;
      gap: 10px;
      border-radius: 0 5px 5px 0;
    }

    .sidebar .main li.main-item a {
      display: block;
    }

    .sidebar .main li.main-item.active {
      background-color: #e3f2fd;
      color: #2196f3 !important;
    }

    .sidebar .main .sub {
      padding: 0 0 0 35px;
    }

    .sidebar ::slotted(a) {
      display: block;
      padding: 5px 10px !important;
      text-decoration: none;
      color: #424242 !important;
      font-size: 13px;
      border-radius: 4px;
    }

    .sidebar ::slotted(a.active) {
      background-color: #e3f2fd;
      color: #2196f3 !important;
    }

    .content {
      grid-area: content;
      overflow-y: auto;
    }
  `;
}

declare global {
  interface HTMLElementTagNameMap {
    'coam-wrapper': CoamWrapper;
  }
}
