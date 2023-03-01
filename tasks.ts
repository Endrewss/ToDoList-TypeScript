export class TaskList{
    ul: HTMLElement;
    list: string[] = [];

    constructor(zawarudo: HTMLElement){
        this.ul = zawarudo;
        this.read();
    }

    save(){
        localStorage.setItem(`tasks__todo`, JSON.stringify(this.list));
    }

    read(){
        let saved = localStorage.getItem(`tasks__todo`);
        if(saved){
            this.list = JSON.parse(saved);
        }
    }
}