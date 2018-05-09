class DomHelper {
    el: HTMLElement
    constructor(query?) {
        if (query) {
            this.el = document.querySelector(query);
        }
    }

    css(key, value) {
        this.el.style[key] = value;
    }

    attr(key, value) {
        this.el.setAttribute(key, value);
    }

    get window() {
        return window;
    }

    get document() {
        return document;
    }

    get innerHeight() {
        return (window as any).innerHeight;
    }

    createElement(type) {
        return document.createElement(type);
    }

    innerTextFromHtml(html: string) {
        try {
            var el = this.createElement('div');
            el.innerHTML = html;
            return el.innerText;   
        }
        catch (ex) {
            console.log(ex);
        }
        return "";
    }

}

export default DomHelper;