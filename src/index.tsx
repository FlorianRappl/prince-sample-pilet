import './css/tile.scss';
import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'sample-piral';

const PrinceOfPersia = React.lazy(() => import('./prince'));

export function setup(app: PiletApi) {
  const path = '/prince-of-persia';

  app.registerMenu?.(() => <Link to={path}>Prince of Persia</Link>);

  app.registerTile?.(
    () => (
      <Link to={path} className="prince-tile">
        Prince of Persia
      </Link>
    ),
    {
      initialColumns: 2,
      initialRows: 2,
    },
  );

  app.registerPage?.(path, PrinceOfPersia);
}
