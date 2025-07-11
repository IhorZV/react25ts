import React, {createContext, FC, PropsWithChildren} from 'react';

// interface IProps {
// // children: React.ReactNode | undefined; - first variant
//
// }

const Firstcontext = createContext<number>(null);
const Secondcontext = createContext<{ name: string }>(null);

interface IProps extends PropsWithChildren {

};


const ContextProvider: FC<IProps> = ({children}) => {
    return (
        <Firstcontext.Provider value={555}>
            <Secondcontext.Provider value={{name: "Lala"}}>
                {children}
            </Secondcontext.Provider>
        </Firstcontext.Provider>
    );
};

export {ContextProvider};