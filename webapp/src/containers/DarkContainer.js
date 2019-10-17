/**
 * Container with dark backgroun
 * 
 * @author Kelvin Yin
 */

import React from 'react';

function DarkContainer(props) {
    return(
        <div className="bg-dark text-white w-100 h-100">
            { props.children }

            <div className="py-3 text-center">
                <small>Copyright &copy; 2019 NuCar &bull; Developed by Kelvin</small>
            </div>
        </div>
    );
}

export default DarkContainer;