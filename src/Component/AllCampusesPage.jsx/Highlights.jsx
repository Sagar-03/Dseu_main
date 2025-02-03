import News1 from '../../assets/News/News1.jpg';
import News2 from '../../assets/News/News3.jpg';
import News3 from '../../assets/News/News4.jpg';
import News4 from '../../assets/News/News1.jpg';
import News5 from '../../assets/News/News3.jpg';
import News6 from '../../assets/News/News4.jpg';

const Highlights = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Card 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 aspect-[4/3]">
          <img src={News1} alt="News 1" className="w-full h-full object-cover rounded-t-lg" />
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 aspect-[4/3]">
          <img src={News2} alt="News 2" className="w-full h-full object-cover rounded-t-lg" />
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 aspect-[4/3]">
          <img src={News3} alt="News 3" className="w-full h-full object-cover rounded-t-lg" />
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 aspect-[4/3]">
          <img src={News4} alt="News 4" className="w-full h-full object-cover rounded-t-lg" />
        </div>
        {/* Card 5 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 aspect-[4/3]">
          <img src={News5} alt="News 5" className="w-full h-full object-cover rounded-t-lg" />
        </div>
        {/* Card 6 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 aspect-[4/3]">
          <img src={News6} alt="News 6" className="w-full h-full object-cover rounded-t-lg" />
        </div>
      </div>
    </div>
  );
};

export default Highlights;
