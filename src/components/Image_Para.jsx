import Image from '../assets/images/rafiki.png' 
import Heading from './Heading'
import Para from './Para'

function Image_Para() {
  return (
    <div className="max-w-[1155px] mx-auto flex flex-col md:flex-row items-center justify-between gap-10 px-6 py-12">
      
      {/* Image */}
      <div className="w-full md:w-[45%] flex justify-center">
        <img 
          src={Image} 
          alt="image" 
          className="w-full max-w-[400px] md:max-w-full h-auto object-contain"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col justify-center w-full md:w-[55%] text-center md:text-left">
        <Heading
          text="The unseen of spending three years at Pixelgrade"
        />
        <Para 
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio."
        />
        <a 
          href="#" 
          className="inline-block px-6 py-3 bg-[#53af4f] text-white rounded-[4px] text-[15px] sm:text-[17px] hover:bg-[#469a42] transition-colors duration-200 mt-6 md:mt-8 mx-auto md:mx-0 w-[140PX] text-center"
        >
          Register
        </a>
      </div>
    </div>
  )
}

export default Image_Para
