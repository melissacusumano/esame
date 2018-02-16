var count=1;
var users=[

  {
    token:count++,
    name:"melissa",
    surname:"cusumano",
    friends:[7],
    requestReceived:[6],
    requestMade:[],
    post:[{ message:"home"}]
  },
  {
    token:count++,
    name:"sara",
    surname:"rosa",
    friends:[4],
    requestReceived:[1],
    requestMade:[],
    post:[{message:"facebook"
    }]
  }
]


var getUsers= function(){
  return users;
}

//console.log(getUsers());


var newMember = function(member){ //registrazione
      member.token=count++;
      member.friends=[],
      member.requestReceived=[],
      member.requestMade=[],
      member.post=[]
      users.push(member);

      return users;
    }



console.log (newMember({name:"melissa" , surname:"cusumano"}));


var addPost= function (createPost){
 for(var i=0;i<users.length; i++){
   if(users[i].token=== createPost){
   }
 }
 return users;
}
console.log (addPost(1,({message:"hi"})));



var getRequest = function(idReceive){
  for (var i=0 ; i<social.lenght;i++){
    if(users[i].token===idReceive){
      social[i].req.push(id)
    }
  }
}
