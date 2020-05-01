import $ from "jquery";
export default class Tracker {
    constructor({ id="", className="",tag,events=[], mem_,description=""}) {
        this.mem = this.mem.bind(this); //method for getting and setting this.memory
        this.memory = mem_; //memory variable used to save information
        this.subjectID=id; //the id of the element to track
        this.subjectClass=className; //the class of the element(s) to track
        this.description=description; //description to help us identify the Tracker
        
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
        return {subjectID:this.subjectID,subjectClass:this.subjectClass,memory:this.memory,description:this.description}
    }
}


export class TrackerManager{
    constructor(){
        this.trackers = []
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.export = this.export.bind(this);
    }
    
    add({ id="", className="",tag,events=[], mem_,description="" }){
        var data = { id, className,tag,events, mem_ ,description}
        try{
            this.trackers.push(
                new Tracker(data)            
            )
            console.log("Tracker, added!");
            console.log(this.trackers[this.trackers.length-1])            
        }
        catch (e) {console.log(e);}
    }
    remove({i=0}){
        this.trackers.splice(i,1);
    }


    export(){
        return this.trackers.map((tracker)=>tracker.export())
        //this.trackers.forEach((tracker)=>console.log(tracker.export()))
    }
}

//exports.Tracker = Tracker;
//exports.TrackerManager = TrackerManager;