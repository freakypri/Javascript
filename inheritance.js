//base class
var Job = function () {
    this.pays = true;
};

//prototype method
Job.prototype.print = function () {
    console.log(this.pays ? 'Please hire me ' : 'no thank you');
};

//subclass
var TechJob = function (title, pays) {
    //call Job constructor and sets this value and makes 
    //this a subclass(inherit the values inside the Job) but didn't inherit the prototype
    Job.call(this);
    this.title = title;
    this.pays = pays;
};

//inherit from Job.prototype
TechJob.prototype = Object.create(Job.prototype);
//inheriting the constructor
TechJob.prototype.constructor = TechJob;

TechJob.prototype.print = function(){
   console.log(this.pays ? 'Job is great, please hire me ' : 'i would rather learn javascript');
}

var softwarePosition = new TechJob('Javascript Programmer',true);
var softwarePosition2 = new TechJob('VB Programmer',false);

console.log(softwarePosition.print());
console.log(softwarePosition2.print());