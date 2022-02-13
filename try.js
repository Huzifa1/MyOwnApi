//"[{'id':1, 'name':'huzifa'}, {'id':2, 'name':'Walid'}, {'id':3, 'name':'Aya'}, {'id':4, 'name':'Moayad'}]"
var data = '[{"id":1, "name":"Huzifa"}, {"id":2, "name":"Walid"}, {"id":3, "name":"Aya"}, {"id":4, "name":"Moayad"}]';
var x = JSON.parse(data);
x.forEach(element => {
    console.log(element.name);
});

