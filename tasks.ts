export class TaskList{
    list: string[] = [];
    ul: HTMLElement;
    
    constructor(zawarudo: HTMLElement){
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
        this.ul.innerHTML = '';
        this.list.forEach((task) => {
            const li = document.createElement("li");
            li.className = "mb-2";
            const button = document.createElement("button");
            button.className = "btn btn-danger btn-sm ms-2";
            button.innerText = "-";
            button.addEventListener("click", ()=>{
                this.remove(task);
            });
            li.innerText = task;
            li.appendChild(button);
            this.ul.appendChild(li);
        });
    }

    add(task : string){
        this.list.push(task);
        this.save();
        this.render();
    }

    remove(task : string){
        const ls = this.list.indexOf(task);
        if(ls >= 0){
            this.list.splice(ls, 1);
            this.save();
            this.render();
        }
    }
}