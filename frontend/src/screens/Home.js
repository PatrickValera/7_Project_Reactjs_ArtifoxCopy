import HomeCarousel1 from '../components/HomeCarousel1'
// import Card from '../components/Card'

const cards=[{
    title:"Modular Desk",
    content:"Create your dream workspace with our customizable desk system",
    image:"/images/desk.jpg"
},{
    title:"Shelves and Accessories",
    content:"Display your artifacts with our minimal shelves and magnetic accessories",
    image:"/images/minishelf.jpeg"
},{
    title:"Bike Rack",
    content:"Finally a bike rack that is bot hfunctional and beautiful",
    image:"/images/rack.jpg"
},]
const Home = () =>{
    return(
        <div className="home">
            <HomeCarousel1/>
              <div className="card-container">
            {cards.map((card,index)=>(
                <div className="card" key={index}>
                    <div className="image-container">
                        <figure>
                            <img src={card.image} alt="" />
                        </figure>
                    </div>
                    <div className="text-container">
                        <h3 className="title">{card.title}</h3>
                        <p className="content">{card.content}</p>
                    </div>
                </div>
            ))}
            </div>
            
        </div>
    )
}
export default Home