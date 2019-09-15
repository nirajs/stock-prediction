import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';

export default function Header(props) {
    return (
        <React.Fragment>
        <Toolbar component="nav" variant="dense" className={props.classes.toolbar}>
          {props.sections.map(section => (
            <Button size="small" key={section}><Link
              color="inherit"
              noWrap
              variant="body2"
              href="/price?section=[section]" 
              as={`/price?section=${section}`}
              className={props.classes.toolbarLink}
            >
              {section}
            </Link></Button>
          ))}
        </Toolbar>
        </React.Fragment>
    )
};