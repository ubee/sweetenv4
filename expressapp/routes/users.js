var express = require('express');
var router = express.Router();
var _router = express.Router();

var multer = require('multer');
var path = require('path');
var User = require('../models/user');
var Post1 = require('../models/post1');
var Post2 = require('../models/post2');
var Post3 = require('../models/post3');
var Before = require('../models/before');
var Rating = require('../models/rating');
var AssignedProject = require('../models/assignedProject');
var Todolist = require('../models/todolist');
var Business = require('../models/business');
var Home = require('../models/homeRenovation');


const nodemailer = require('nodemailer');




var Inspiration = require('../models/inspiration');
var randomstring = require("randomstring");
var mailer = require('../misc/mailer');


var secret;
var id;
var type;
var client_email;



var passport = require('passport');

router.post('/register',  function (req, res, next) {
  addToDB(req, res);
});


async function addToDB(req, res) {

 secret = randomstring.generate(6);
  

  console.log(secret);

  var user = new User({
    email: req.body.email,
    username: req.body.username,
    password: User.hashPassword(req.body.password),
    secretToken:secret,
    active:'false',
    usertype:req.body.type,
    rating:1,
    creation_dt: Date.now()
  });

    //doc = await user.save();
    doc= await user.save((err, doc) => {
      if (!err) {return res.json(doc); }
      else { return res.status(501).json("failed") }
  });
    //return res.status(201).json(doc);
  

  const html = `Hi,
  <br/>
  <br/>
  Thank you for registering as a <b>${user.usertype}</b>!
  <br/><br/>
  <a href="http://18.221.185.99:4200/verify">Click Here</a> to activate your account by Entering
   Secret Token: <b>${secret}</b>
  <br/><br/>
  Have a pleasant day.` 

  await mailer.sendEmail('pdfgenerator1234@gmail.com', req.body.email, 'Please verify your email!', html);
  return res.status(201).json('sucess');

   
} 

router.get('/gettype',function(req,res,next){
  User.find({_id:id},function(err, obj){
    if(err){
      return next(err);
    }
    res.json(obj);
    console.log(obj);
  });    
          });


router.post('/login',function(req,res,next){
  passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(501).json(err); }
    if (!user) { return res.status(501).json({message:info})}
    req.logIn(user, function(err) {
      if (err) { return res.status(501).json(err) }
      return res.status(200).json({message:'Login Success'});
    });
  })(req, res, next);

  User.find({email:req.body.email,usertype:req.body.type}, function(err, obj){
    id = obj[0]._id+"";
    type=obj[0].optradio;
      });
});

router.post('/adminlogin',function(req,res,next){
  /*User.find({email:req.body.email},function(err, obj){
    if(err){
      return next(err);
    }
    if(obj!="admin1@sweeten.com"){
      return next(err);
    }
    res.json(obj);
    console.log(obj);
    */
    passport.authenticate('local', function(err, user, info) {
      //if (err) { return res.status(501).json(err); }
      if (!user) { return res.status(501).json(info); }
      req.logIn(user, function(err) {
         if(user.email=="admin1@sweeten.com"){
        return res.status(200).json({message:'Login Success'});}
        else {
          return res.status(501).json(info);}
      });
    })(req, res, next);

  });

  

 /* passport.authenticate('local', function(err, user, info) {
    if (err) { return res.status(501).json(info); }
    if (!user) { return res.status(501).json(info); }
    req.logIn(user, function(err) {
      if (err) { return res.status(501).json(info); }
      return res.status(200).json({message:'Login Success'});
    });
  })(req, res, next);*/

 


router.get('/user',isValidUser,function(req,res,next){
  return res.status(200).json(req.user);
});

router.get('/logout',isValidUser, function(req,res,next){
  req.logout();
  return res.status(200).json({message:'Logout Success'});
})

function isValidUser(req,res,next){
  if(req.isAuthenticated()) next();
  else return res.status(401).json({message:'Unauthorized Request'});
}


router.post('/post1', (req, res) => {
  var p1 = new Home({
     
    streetAddress:req.body.streetAddress,
    City:req.body.City,
    State:req.body.State,
    renovation: req.body.renovation,
    zip:req.body.zip,
    Skills:req.body.Skills,
    userid:id,
    status:"pending"
      
      
     

  });
  p1.save((err, doc) => {
      if (!err) { res.send(doc); }
      else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
  });
});

router.post('/post2', (req, res) => {
     

  Home.update({userid:id},{
    reno:req.body.renovation,
    reason:req.body.reason,
    scope:req.body.scope,
    squarefoot:req.body.squarefoot,
    premium:req.body.premium,
    style:req.body.style,
    service:req.body.service,
    budget1:req.body.budget1,
    budget2:req.body.budget2,
    help:req.body.help,
    question:req.body.question,
    url:req.body.url,
    userid:id,    
  },

    function (err, maha) {
      if (err) {
        res.send(err);
      }
      else{
      res.json('Successfully Updated');
      }
    });
});

router.post('/check', (req, res) => {
  User.findOne({email:req.body.email,usertype:req.body.type},function(err, obj){
    if (err) {
      res.json(err);
    }
    else{
     res.status(200).json(obj);
    }
  });
});
router.post('/post3', (req, res) => {
  Home.update({userid:id},{
    type:req.body.type,
    condition:req.body.condition,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    number:req.body.number,
    available:req.body.available,
    date:req.body.date,
    userid:id,
    status:"complete"
  },

    function (err, maha) {
      if (err) {
        res.send(err);
      }
      else{
      res.json('Successfully Updated');
      }
    });
});

var store = multer.diskStorage({
  destination:function(req,file,cb){
      cb(null, './uploads');
  },
  filename:function(req,file,cb){
      cb(null, Date.now()+'.'+file.originalname);
  }
});


var upload = multer({storage:store}).single('file');

router.post('/upload', function(req,res,next){
  upload(req,res,function(err){
      if(err){
          return res.status(501).json({error:err});
      }
      //do all database record saving activity
      console.log({originalname:req.file.originalname, uploadname:req.file.filename});

      var b = new Before({
        originalname:req.file.originalname, 
        uploadname:req.file.filename     
    
      });
      b.save((err, doc) => {
          if (!err) {
            return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
          }
          else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
      });


  
      });


  });

  router.post('/uploadInpiration', function(req,res,next){
    upload(req,res,function(err){
        if(err){
            return res.status(501).json({error:err});
        }
        //do all database record saving activity
        console.log({originalname:req.file.originalname, uploadname:req.file.filename});
  
        var b = new Inspiration({
          originalname:req.file.originalname, 
          uploadname:req.file.filename     
      
        });
        b.save((err, doc) => {
            if (!err) {
              return res.json({originalname:req.file.originalname, uploadname:req.file.filename});
            }
            else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
        });
  
  
    
        });
  
  
    });

    router.post('/verify', (req, res) => {
      User.findOneAndUpdate({secretToken:req.body.secretToken},
        {active:true},
    
        function (err, maha) {
          if (err) {
            res.send(err);
          }
          else{
          res.json(maha);
          }
        });
     });
     router.get('/homerenovationinfo1', (req, res) => {
      Home.find({userid:id},function(err, obj){
        if(err){
          return next(err);
        }
        res.json(obj);
        console.log(obj);
      });
    });

    router.get('/homerenovationinfo2', (req, res) => {
      Post2.find({userid:id},function(err, obj){
        if(err){
          return next(err);
        }
        res.json(obj);
        console.log(obj);
      });
    });

    router.get('/homerenovationinfo3', (req, res) => {
      Post3.find({userid:id},function(err, obj){
        if(err){
          return next(err);
        }
        res.json(obj);
        console.log(obj);
      });
    });

    router.get('/getpost1/:id', (req, res) => {
      Home.findById(req.params.id,function(err, obj){
        if(err){
          return next(err);
        }
        res.json(obj);
        console.log(obj);
      });
    });

 

    router.post('/updatepost1/:id', (req, res) => {
     // console.log(req.body.secretToken);
      Home.update({_id:req.params.id},{
        streetAddress:req.body.streetAddress,
        City:req.body.City,
        State:req.body.State,
        renovation: req.body.renovation,
        zip:req.body.zip,
        Skills:req.body.Skills,
        userid:id,    
      },
  
        function (err, maha) {
          if (err) {
            res.send(err);
          }
          else{
          res.json('Successfully Updated');
          }
        });
     });

     router.get('/AssignProject/:id1/:cid/:cemail/:userid', (req, res) => {
      console.log(req.params.id1,req.params.cid);
      User.find({_id:req.params.userid},function(err, obj){
        if(err){
          return next(err);
        }
        client_email=obj[0].email;
      });
      
      var p1 = new AssignedProject({
         projectid:req.params.id1,
         contractor_id:req.params.cid        
      });
      p1.save((err, doc) => {
          if (!err) { 
            const html = `Hi,
            <br/>
            You Have Been assigned a project, Please login to your dashboard to see further details!
            <br/><br/>
            Have a pleasant day.` 
          
            mailer.sendEmail('pdfgenerator1234@gmail.com', req.params.cemail, 'Assigned Project Notification!', html);
            const html1 = `Hi,
            <br/>
            Your Project has been assigned, Please login to your dashboard to see further details!
            <br/><br/>
            Have a pleasant day.` 
          
            mailer.sendEmail('pdfgenerator1234@gmail.com',client_email, 'Assigned Project Notification!', html1);
            return res.status(201).json('sucess');
            res.send(doc);
           }
          else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
      });

 
      
      });

     router.get('/contractorRating/:rating/:id', (req, res) => {
      User.update({_id:req.params.id},{
      
       rating:req.params.rating,
               
       },
   
         function (err, maha) {
           if (err) {
             res.send(err);
           }
           else{
            res.json(maha);
           }
         });
      });
  

     router.post('/updatepost2/:id', (req, res) => {
      // console.log(req.body.secretToken);
       Home.update({_id:req.params.id},{
        reno:req.body.renovation,
        reason:req.body.reason,
        scope:req.body.scope,
        squarefoot:req.body.squarefoot,
        premium:req.body.premium,
        style:req.body.style,
        service:req.body.service,
        budget1:req.body.budget1,
        budget2:req.body.budget1,
        help:req.body.help,
        question:req.body.question,
        url:req.body.url,
        userid:id,          
       },
   
         function (err, maha) {
           if (err) {
             res.send(err);
           }
           else{
           res.json('Successfully Updated');
           }
         });
      });

      router.post('/updatepost3/:id', (req, res) => {
        // console.log(req.body.secretToken);
         Home.update({_id:req.params.id},{
          type:req.body.type,
          condition:req.body.condition,
          firstname:req.body.firstname,
          lastname:req.body.lastname,
          number:req.body.number,
          available:req.body.available,
          date:req.body.date,
          userid:id,
          status:"complete"    
                
         },
     
           function (err, maha) {
             if (err) {
               res.send(err);
             }
             else{
             res.json('Successfully Updated');
             }
           });
        });

        router.delete('/deletepost1/:id',function(req,res,next){
          Home.remove({_id:req.params.id}, function(err, result) {
            if (err) throw err;
        
            res.json(result);
            console.log(result);
       });
         });
       
         router.delete('/deletepost2/:id',function(req,res,next){
          Post2.remove({_id:req.params.id}, function(err, result) {
            if (err) throw err;
        
            res.json(result);
            console.log(result);
       });
         });
         router.delete('/deletepost3/:id',function(req,res,next){
          Post3.remove({_id:req.params.id}, function(err, result) {
            if (err) throw err;
        
            res.json(result);
            console.log(result);
       });
         });

         router.get('/getinspirationphoto', (req, res) => {
          Inspiration.find({},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getbeforephoto', (req, res) => {
          Before.find({},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        
        router.get('/getclients', (req, res) => {
          User.find({usertype:"client"},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          }).limit(4);
        });
        router.get('/getcDetail/:id', (req, res) => {
          AssignedProject.find({projectid:req.params.id},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getcinfo/:id', (req, res) => {
          User.find({_id:req.params.id},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getAllclients', (req, res) => {
          User.find({usertype:"client"},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
  
  
        router.get('/getcontractors', (req, res) => {
          User.find({usertype:"contractor"},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          }).limit(4);
        });
        router.get('/getAllcontractors', (req, res) => {
          User.find({usertype:"contractor"},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getclientProject/:id', (req, res) => {
          Home.find({userid:req.params.id},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getProjectinfo/:id', (req, res) => {
          Home.find({_id:req.params.id},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getclientProject2/:id', (req, res) => {
          Post2.find({userid:req.params.id},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getclientProject3/:id', (req, res) => {
          Post3.find({userid:req.params.id},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getAssignedProjectId/:id', (req, res) => {
          AssignedProject.find({contractor_id:req.params.id},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getAllProject1', (req, res) => {
          Home.find({},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getAllProject2', (req, res) => {
          Post2.find({},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getAllProject3', (req, res) => {
          Post3.find({},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getProject1/:id', (req, res) => {
        Home.find({_id:req.params.id},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getProject2/:id', (req, res) => {
          Post2.find({_id:req.params.id},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getProject3/:id', (req, res) => {
          Post3.find({_id:req.params.id},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
        router.get('/getAssignedPId', (req, res) => {
          AssignedProject.find({contractor_id:id},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });

        router.post('/savetodolist/:id', (req, res) => {
          // console.log(req.body.secretToken);
          var p1 = new Todolist({
     
            taskList:req.body,
            projectid:req.params.id
  
              
             
        
          });
          p1.save((err, doc) => {
              if (!err) { res.send(doc); }
              else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
          });
      
          });
      
          router.post('/saveBacktodolist/:id', (req, res) => {
            // console.log(req.body.secretToken);
            Todolist.update({projectid:req.params.id},{
              taskList:req.body,
             },
         
               function (err, maha) {
                 if (err) {
                   res.send(err);
                 }
                 else{
                 res.json('Successfully Updated');
                 }
               });
        
            });
            router.post('/updatetodolist/:id', (req, res) => {
              Todolist.update({projectid:req.params.id},{
                taskList:req.body,
    
               },
           
                 function (err, maha) {
                   if (err) {
                     res.send(err);
                   }
                   else{
                   res.json('Successfully Updated');
                   }
                 });
          
              });
          router.get('/getTodolist/:id', (req, res) => {
            Todolist.find({projectid:req.params.id},function(err, obj){
              if(err){
                return next(err);
              }
              res.json(obj);
              console.log(obj);
            });
          });

          router.get('/getBusinessProject', (req, res) => {
            Business.find({},function(err, obj){
              if(err){
                return next(err);
              }
              res.json(obj);
              console.log(obj);
            });
          });
          router.get('/getBR/:id', (req, res) => {
            Business.find({_id:req.params.id},function(err, obj){
              if(err){
                return next(err);
              }
              res.json(obj);
              console.log(obj);
            });
          });


          router.get('/getBusinessRenovationProject', (req, res) => {
            Business.find({userid:id},function(err, obj){
              if(err){
                return next(err);
              }
              res.json(obj);
              console.log(obj);
            });
          });

          router.post('/postBusiness', (req, res) => {
            var p1 = new Business({
               
              streetAddress:req.body.streetAddress,
              City:req.body.City,      
              State:req.body.State,
              zip:req.body.zip,
              leaseduration:req.body.leaseduration,
              url:req.body.url,
              scope:req.body.scope,
              squarefoot:req.body.squarefoot,
              style:req.body.style,
              budget1:req.body.budget1,
              budget2:req.body.budget2,
              req:req.body.req,
              question:req.body.question,
              firstname:req.body.firstname,
              lastname:req.body.lastname,
              number:req.body.number,
              startdate:req.body.startdate,
              deadline:req.body.deadline,
              info:req.body.info,
              projectname:req.body.projectname,
              renovationOptions:req.body.renovationOptions,
              userid:id
            });
            p1.save((err, doc) => {
                if (!err) { res.send(doc); }
                else { console.log('Error in Employee Save :' + JSON.stringify(err, undefined, 2)); }
            });
          });
          router.delete('/deleteBusiness/:id',function(req,res,next){
            Business.remove({_id:req.params.id}, function(err, result) {
              if (err) throw err;
          
              res.json(result);
              console.log(result);
         });
           });


    router.post('/updateBusiness/:id', (req, res) => {
      // console.log(req.body.secretToken);
       Business.update({_id:req.params.id},{
        streetAddress:req.body.streetAddress,
        City:req.body.City,      
        State:req.body.State,
        zip:req.body.zip,
        leaseduration:req.body.leaseduration,
        url:req.body.url,
        scope:req.body.scope,
        squarefoot:req.body.squarefoot,
        style:req.body.style,
        budget1:req.body.budget1,
        budget2:req.body.budget2,
        req:req.body.req,
        question:req.body.question,
        firstname:req.body.firstname,
        lastname:req.body.lastname,
        number:req.body.number,
        startdate:req.body.startdate,
        deadline:req.body.deadline,
        info:req.body.info,
        projectname:req.body.projectname,
        renovationOptions:req.body.renovationOptions,
        userid:id
       },
   
         function (err, maha) {
           if (err) {
             res.send(err);
           }
           else{
           res.json('Successfully Updated');
           }
         });
      });

      router.get('/setProjectStatus/:id', (req, res) => {
        // console.log(req.body.secretToken);
         Home.update({_id:req.params.id},{
          project_status:"assigned"
         },
     
           function (err, maha) {
             if (err) {
               res.send(err);
             }
             else{
             res.json('Successfully Updated');
             }
           });
        });

        router.get('/getBusinessProject1/:id', (req, res) => {
          Business.find({_id:req.params.id},function(err, obj){
            if(err){
              return next(err);
            }
            res.json(obj);
            console.log(obj);
          });
        });
module.exports = router;
