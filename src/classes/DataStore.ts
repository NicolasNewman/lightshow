import * as Store from 'electron-store';

export type DataStoreKeys = 'shrinkframesize' | 'monitor' | 'visualize';

/**
 * Wrapper for electron-store\'s Store object
 */
export default class DataStore {
    private store;

    private schema;

    /**
     * Creates the data schema and initializes the store
     * @constructor
     */
    constructor() {
        this.schema = {
            shrinkframesize: {
                type: 'number',
                description:
                    'integer value for the --shrinkframesize argument of light-sync',
                min: 0,
                max: 200,
                default: 100,
            },
            monitor: {
                type: 'number',
                description:
                    'integer value for the index of the monitor to select',
                default: 0,
            },
            visualize: {
                type: 'boolean',
                description:
                    'boolean value for the --visualize argument of light-sync',
                default: false,
            },
        };
        this.store = new Store({ schema: this.schema });
    }

    /**
     * Updates the value of the given key in the Store
     * @param {string} key - the key the data is stored under
     * @param {*} value - the new value for the data
     */
    set = (key: DataStoreKeys, value: any): void => {
        if (this.schema[key]) {
            console.log('contains key ', key);
            this.store.set(key, value);
        }
    };

    /**
     * @param {string} key - the key the data is stored under
     * @returns {*} the information stored at the given key
     */
    get = (key: DataStoreKeys): any => {
        return this.schema[key] ? this.store.get(key) : undefined;
    };
}
