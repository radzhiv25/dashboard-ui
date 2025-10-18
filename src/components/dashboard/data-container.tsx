import { ReactNode } from 'react';

interface DataContainerProps {
    headingChild: ReactNode;
    graphChild: ReactNode;
    justifyCenter?: boolean;
}

export const DataContainer = ({ headingChild, graphChild, justifyCenter = false }: DataContainerProps) => {
    return (
        <div className={`bg-[#F7F9FB] dark:bg-gray-900 rounded-lg dark:border-gray-700 p-4 ${justifyCenter ? 'flex flex-col items-center' : ''}`}>
            <div className="mb-4">
                {headingChild}
            </div>
            <div className="w-full">
                {graphChild}
            </div>
        </div>
    );
};
