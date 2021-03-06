import React from 'react';

export const WarningMessage = ({ title, message, clear }: { title: string, message: string, clear: React.MouseEventHandler }): React.ReactElement => (
    <div className="flex p-2 bg-yellow-100 rounded-lg dark:bg-yellow-200" role="alert">
        <div className="ml-3 text-sm font-medium text-yellow-700 dark:text-yellow-800">
            <span className="font-bold">{title} ! </span>{message}.
        </div>
        <button type="button" className="ml-auto -mx-1.5 -my-1.5 bg-yellow-100 text-yellow-500 rounded-lg focus:ring-2 focus:ring-yellow-400 p-1.5 hover:bg-yellow-200 inline-flex h-8 w-8 dark:bg-yellow-200 dark:text-yellow-600 dark:hover:bg-yellow-300" onClick={clear}>
            <span className="sr-only">Close</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
        </button>
    </div>
);

export default WarningMessage;

// export const WarningMessage = ({ title, message }: { title: string, message: string }): React.ReactElement => (
//     <div className="p-2 text-md text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800" role="alert">
//         <span className="font-bold">{title} ! </span>{message}.
//     </div>
// );