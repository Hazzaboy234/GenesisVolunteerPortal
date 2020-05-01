export default class Tracker {
    constructor({ id="", className="",tag,events=[], mem_ }) {
        this.mem = this.mem.bind(this); //method for getting and setting this.memory
        this.memory = mem_; //memory variable used to save information
        this.subjectID=id; //the id of the element to track
        this.subjectClass=className; //the class of the element(s) to track
        
        
        const subject = document.getElementById(id);        
        if (subject !== null) events.forEach((e)=>subject.addEventListener(e.event, e.eventHandler.bind(this, this.mem)))
        
        const subjects = document.getElementsByClassName(className);
        for(var i=0;i<subjects.length;i++) events.forEach((e)=>subjects[i].addEventListener(e.event, e.eventHandler.bind(this, this.mem)))
        //trackers.push({id:this.id,memory:this.memory}) //push it to the global trackers thing

    }

    mem(newMem=null){
        if(newMem===null){
            return this.memory;
        }else{
            this.memory=newMem;
        }
    }

    //returns an object with tracker data inside
    export(){
        return {subjectID:this.subjectID,subjectClass:this.subjectClass,memory:this.memory}
    }
}
