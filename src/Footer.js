import React from 'react';


class Footer extends React.Component {
    render() {
        return(
            <div className="Footer">
                <div>Active tasks: 'N'</div>
                <div>Finished tasks: 'M'</div>
                <div>Kanban board by 'NAME', 'YEAR'</div>
            </div>
        )
    }
}

export default Footer;