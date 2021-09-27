const products=[{
    name:"Table",
    tags:["desk"],
    colors:["Black Oak"],
    price:2400,
    images:{
        main:'/images/table.jpg',
        sub:'/images/tablesub.jpg'
    },
    featured:true
},{
    name:"Side",
    tags:["side"],
    colors:["Walnut"],
    price:850,
    images:{
        main:'/images/side.jpg',
        sub:'/images/sidesub.jpg'
    },
    video:"/videos/Side.mp4",
    featured:false,
    details:{
        description:"This well-rounded walnut side table fits perfectly in the workspace, lounging space or sleeping space. Dock storage on top for your phone, tablet or accessories all with cables managed below. Drawer storage for books, tech or everyday objects. Made in the USA.",
        features:["Built in dock for modular accessories and phones","Metal grid for attaching cables","Hidden cable management","Shelf for laptops","Deep drawer that can be used for file cabinet or everyday storage"],
        specification:{
            dimension:`50"`,
            weight:"50 lbs",
            materials:["solid walnut","powder-coated steel"]
        }
    },
    options:[
        {name:"Cabinet",choices:["Walnut","Bone"]}
    ],    
    quality:{
        image:"/images/sidequality.jpg",
        qualities:[
            {   image:"/icons/icon-dock.png",
                title:"BUILT-IN DOCK",
                subheading:"A modular system that allows you to attach accessories and create your own set-up."
            },{
                image:"/icons/icon-cables.png",
                title:"CABLE MANAGEMENT",
                subheading:"Easily manage cords and power strips by attaching them to the cable grid."
            },{
                image:"/icons/icon-backpack.png",
                title:"HOOKS",
                subheading:"Conveniently placed within reach for bags and headphones."
            }
        ]
    }
},{
    name:"Shelf",
    tags:["shelf"],
    colors:["Black"],
    price:99,
    images:{
        main:'/images/shelf.jpg',
        sub:'/images/shelfsub.jpg'
    },
    featured:false
},{
    name:"Lift",
    tags:["lift"],
    colors:["Walnut"],
    price:850,
    images:{
        main:'/images/lift.jpg',
        sub:'/images/liftsub.jpg'
    },
    featured:false
},{
    name:"Magazine Holder",
    tags:["desk"],
    colors:["Smoke"],
    price:60,
    images:{
        main:'/images/magazineholder.jpg',
        sub:'/images/magazineholdersub.jpg'
    },
    featured:false
},{
    name:"Large Stand",
    tags:["desk"],
    colors:["Walnut"],
    price:150,
    images:{
        main:'/images/stand.jpeg',
        sub:'/images/standsub.jpeg'
    },
    featured:false
},{
    name:"small stand",
    tags:["desk"],
    colors:["Walnut"],
    price:65,
    images:{
        main:'/images/smallstand.jpeg',
        sub:'/images/smallstandsub.jpeg'
    }
},{
    name:"Desk",
    tags:["desk"],
    colors:["Walnut"],
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
    },
    quality:{
        image:"/images/deskquality.jpg",
        qualities:[
            {   image:"/icons/icon-dock.png",
                title:"BUILT-IN DOCK",
                subheading:"A modular system that allows you to attach accessories and create your own set-up."
            },{
                image:"/icons/icon-cables.png",
                title:"CABLE MANAGEMENT",
                subheading:"Easily manage cords and power strips by attaching them to the cable grid."
            },{
                image:"/icons/icon-backpack.png",
                title:"HOOKS",
                subheading:"Conveniently placed within reach for bags and headphones."
            }
        ]
    }

},{
    name:"Slate",
    price:25,
    images:{
        main:'/images/slate.jpg',
        sub:'/images/slatesub.jpg'
    },
    featured:false
},{
    name:"tray",
    tags:["shelf"],
    colors:["black"],
    price:45,
    images:{
        main:'/images/tray.jpg',
        sub:'/images/traysub.jpg'
    }
},{
    name:"mini shelf",
    tags:["shelf"],
    price:50,
    images:{
        main:'/images/minishelf.jpeg',
        sub:'/images/minishelfsub.jpeg'
    }
},{
    name:"hook",
    price:50,
    images:{
        main:'/images/hook.jpeg',
        sub:'/images/hooksub.jpeg'
    }
},{
    name:"notebook",
    tags:["shelf"],
    price:20,
    images:{
        main:'/images/notebook.jpeg',
        sub:'/images/notebooksub.jpeg'
    }
},]

export default products