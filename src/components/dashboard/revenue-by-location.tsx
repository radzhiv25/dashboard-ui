import WorldMapSvg from "../../assets/images/world-map.svg";
import { locationData } from '../../data/revenue-by-location-data'

export default function RevenueByLocation() {
    return (
        <div className="p-6 bg-[#F7F9FB] dark:bg-white/5 rounded-2xl dark:border-gray-700">
            <h3 className="text-lg font-semibold text-black dark:text-white mb-6">Revenue by Location</h3>

            {/* World Map Section */}
            <div className="mb-6 relative">
                <img
                    src={WorldMapSvg}
                    alt="World Map"
                    className="w-full h-auto max-h-48 object-contain"
                />
            </div>

            {/* Location List Section */}
            <div className="space-y-4">
                {locationData.map((location, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="text-sm font-medium text-black dark:text-white">{location.name}</span>
                            <span className="text-sm font-medium text-black dark:text-white">{location.revenue}K</span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-white/5 rounded-full h-2">
                            <div
                                className="h-2 rounded-full transition-all duration-300"
                                style={{
                                    width: `${location.percentage}%`,
                                    backgroundColor: '#A8C5DA'
                                }}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
