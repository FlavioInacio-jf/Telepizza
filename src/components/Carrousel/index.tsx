
import Swiper from 'react-id-swiper';
import Card from '../Card';

const Autoplay = () => {

  const data = {
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60',
    title: 'Calabresa',
    priceOld: '25,60',
    priceNew: '25,80',
    description: 'Mussarela, calabresa, queijo',
  }

  const params = {
    spaceBetween: 50,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  }

  return (
    <Swiper {...params}>
      <span><Card data={data} /></span>
      <span><Card data={data} /></span>
    </Swiper>
  )
}

export default Autoplay;