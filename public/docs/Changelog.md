

#### New

- Replaced the Routing System from `1.1.0` version with an easier solution to avoid complexity
- Created 3 individual layouts for `Error`, `Auth` and `Dashboard` pages
- Added `axios` and `axios-mock-adapter` modules to simulate server calls for fetch requests
- Renamed few components
- Updated `Error` page code
- Moved all lib mixins to `mixins` folder
- Moved `helpers` files to `utils` folder
- Removed unused helpers
- Removed unused utils


#### New

- Implemented Code Splitting to lazy load views
- Implemented Layout System based on Route settings
- Implemented Routing System
- Implemented Route Authorization Guard based on authenticated user role and route settings
- Added Redux library and configured some components using it as state manager
- Updated dependencies

#### Fix

- The layouts were similary so kept one Layout only that can be configured dynamically

#### Breaking changes

- Changed the Layout logic
- Renamed few components
- Updated folder structure, grouped all views in the same folder
