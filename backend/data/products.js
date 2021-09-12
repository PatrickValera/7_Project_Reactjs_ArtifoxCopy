const products=[{
    id:1,
    name:"Desk",
    tag:["Walnut"],
    price:1300,
    images:{
        main:'/images/desk.jpg',
        sub:'/images/desksub.jpg'
    },
    featured:true,
    details:{
        description:"A modern desk that adapts to your needs to create the perfect workspace. Made from solid walnut hardwood, then sealed with a beautiful satin finish. The cable grid neatly manages power cords and a built-in dock is compatible with a range of accessories so you can personalize and make it your own. Flat packed and assembles in minutes. Made in the USA.",
        features:["Convenient pegs for hanging bags and headphones","Metal grid for attaching cables","Built-in dock for devices and modular accessories","Adjustable feet for uneven surfaces","Quick assembly with included tool","Rear notch for monitor mount and large cables","Scratch resistant"],
        specification:{
            dimension:`50"`,
            weight:"50 lbs",
            materials:["solid walnut","powder-coated steel"]
        }
    }

},{
    id:2,
    name:"Large Stand",
    tag:["Walnut"],
    price:150,
    images:{
        main:'/images/stand.jpeg',
        sub:'/images/standsub.jpeg'
    },
    featured:false
},{
    id:3,
    name:"small stand",
    tag:["Walnut"],
    price:65,
    images:{
        main:'/images/smallstand.jpeg',
        sub:'/images/smallstandsub.jpeg'
    }
},{
    name:"Slate",
    price:25,
    images:{
        main:'/images/slate.jpg',
        sub:'images/slatesub.jpg'
    },
    featured:false
},{
    id:4,
    name:"mini shelf",
    price:50,
    images:{
        main:'/images/minishelf.jpeg',
        sub:'/images/minishelfsub.jpeg'
    }
},{
    id:5,
    name:"hook",
    price:50,
    images:{
        main:'/images/hook.jpeg',
        sub:'/images/hooksub.jpeg'
    }
},{
    id:6,
    name:"notebook",
    price:20,
    images:{
        main:'/images/notebook.jpeg',
        sub:'/images/notebooksub.jpeg'
    }
},]

export default products