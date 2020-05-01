export default class Tracker {
    constructor({targets=[""], events=[], initialMemory=[], sharedMemory=true, description="", name=""}) {
        if(sharedMemory===true){
            this.memory = initialMemory; //memory variable used to save information
        }else{
            this.memory = []
            
            this.memory.length = targets.length;
            this.memory.fill(initialMemory);
        }
        this.mem = this.mem.bind(this); //method for getting and setting this.memory
        this.description=description; //description to help us identify the Tracker
        this.targets = targets;
        

        this.sharedMemory = sharedMemory;
        //targets.forEach((target)=>{
        for(var j=0;j<targets.length;j++){
            var target = targets[j];
            console.log(document.querySelectorAll(target));
            switch(target.charAt(0)){

                case '#': //We have an ID to target
                const subject = document.getElementById(target.substr(1));
                    events.forEach((e)=>subject.addEventListener(e.event, e.eventHandler.bind(this, this.mem.bind(this,j))))
                    break;

                case '.': //We have a class to target!
                const subjects = document.getElementsByClassName(target.substr(1));
                for(var i=0;i<subjects.length;i++) events.forEach((e)=>subjects[i].addEventListener(e.event, e.eventHandler.bind(this, this.mem.bind(this,j))))
                    break;

                default: //we have an invalid target!
                    throw "X is not a valid target".replace("X",target);
            }
        }

        //trackers.push({id:this.id,memory:this.memory}) //push it to the global trackers thing
    }

    mem(location,newMem=null){
        if(newMem===null){
            if(this.sharedMemory===false) return this.memory;
            else return this.memory[location];
        }else{
            this.memory=newMem;
        }
    }

    //returns an object with tracker data inside
    export(){
        return {target:this.targets,memory:this.memory,description:this.description}
    }
}


export class TrackerManager{
    constructor(){
        this.trackers = []
        this.add = this.add.bind(this);
        this.remove = this.remove.bind(this);
        this.export = this.export.bind(this);
    }
    
    add({ targets, events, mem_,sharedMemory,description}){
        var data = { targets,events, mem_ ,sharedMemory,description}
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