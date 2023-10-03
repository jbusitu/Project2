const model = require('../models/event');
exports.index = (req, res)=>{
    //res.send('send all events');
    let events = model.find();
    let categories = model.getCategories();
    res.render('./event/index', {events, categories});
};

exports.new = (req, res)=>{
    res.render('./event/new');
};

exports.create = (req, res)=>{
    //res.send('Created a new event');
    let event = req.body;
    //console.log(req);
    model.save(event);
    //console.log(event)
    res.redirect('/events');
};

exports.show = (req, res)=>{
    let id = req.params.id;
    let event = model.findById(id);
    if(event) {
        res.render('./event/show', {event});
    } else {
        res.status(404).send('cannot find event with id ' + id);
    }

};

exports.edit = (req, res)=>{
    let id = req.params.id;
    let event = model.findById(id);
    res.send('send the edit form');
    if(event) {
        res.render('./event/edit', {event});
    } else {
        res.status(404).send('cannot find event with id ' + id);
    }
    
};

exports.update = (req, res)=>{
    res.send('update event with id ' + req.params.id);
};

exports.delete = (req, res)=>{
    res.send('delete event with id ' + req.params.id);
};