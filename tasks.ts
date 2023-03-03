export class TaskList{
    ul: HTMLElement;
    list: string[] = [];

    constructor(zawarudo: HTMLElement){
        this.list = ['task 1','task 2','task 3'];
        this.ul = zawarudo;
        this.read();
        this.render();
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

    render(){
        this.ul.innerHTML = "";
        this.list.forEach((task) => {
            const li = document.createElement("li");
            const button = document.createElement("button");

            button.innerText = "-";
            button.addEventListener("click", ()=>{
                const ls = this.list.indexOf(task);
                if(ls > 0){
                    this.list.splice(ls, 1);
                }
            });
            li.innerText = task;
            li.appendChild(button);
            this.ul.appendChild(li);
        });
    }
}