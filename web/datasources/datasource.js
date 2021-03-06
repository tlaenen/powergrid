/**
 * Interface for classes that provide data to a grid. Data (things returned by {@link DataSource#getData} and
 * {@link DataSource.getRecordById} exists of objects (records) that contain at least an 'id' property containing a number
 * or string that uniquely identifies that record.
 *
 * @interface DataSource
 * @extends EventSource
 * @fires DataSource#ready
 * @fires DataSource#rowsadded
 * @fires DataSource#rowsremoved
 * @fires DataSource#dataloaded
 * @fires DataSource#datachanged
 */

/**
 * Indicates that the datasource has become ready to accept queries.
 *
 * @event DataSource#ready
 */

/**
 * Indicates that new data was added to the data source. This should be fired for each contiguous block of records that
 * was added. For example, if in a datasource with records {red, blue, green, orange} data was added so that it became
 * {red, mauve, blue, teal, purple, green, orange}, the following events should be fired:
 *  - rowsadded({start: 1, end: 2})
 *  - rowsadded({start: 3, end: 5})
 * Note that the order in which these events are fired is important (if these two events were swapped, the indices would
 * need to be different).
 *
 * @event DataSource#rowsadded
 * @type {object}
 * @property {number} start - the index of the first row that was added
 * @property {number} end - the index after the last row that was added
 */

/**
 * Indicates that data was removed from the data source. This should be fired for each contiguous blocks of records that
 * are removed. For example, if in a datasource with records {red, mauve, blue, teal, purple, green, orange} data was added so that it became
 * {red, blue, green, orange}, the following events should be fired:
 *  - rowsremoved({start: 3, end: 5})
 *  - rowsremoved({start: 1, end: 2})
 * Note that the order in which these events are fired is important (if these two events were swapped, the indices would
 * need to be different).
 *
 * @event DataSource#rowsremoved
 * @type {object}
 * @property {number} start - the index of the first row that was removed
 * @property {number} end - the index after the last row that was removed
 */

/**
 * Indicates that data has been loaded. In essence, this triggers a complete grid refresh.
 *
 * @event DataSource#dataloaded
 */

/**
 * Indicates that certain values within the dataset have changed (not added nor removed). The accompanying object
 * should specify which changes have taken place. This can be done either by specifying which rows have been changed,
 * or if full row updates are not a problem which rows have changed.
 *
 * @event DataSource#datachanged
 * @type {object}
 * @property {undefined|CellByRowIdAndColumnKey[]} values - the values that have changed
 * @property {undefined|object[]} rows - the records that have changed
 */

/**
 * @function DataSource#isReady
 * @returns {boolean} returns true if the datasource is ready to accept queries.
 */

/**
 * @function DataSource#recordCount
 * @returns {Promise<number>|number} the number of records in the data set
 */

/**
 * Returns all the data in the dataset.
 * @function DataSource#getData
 * @returns {Promise<object[]>|object[]}
 */

/**
 * Returns a range of data in the dataset.
 * @function DataSource#getData
 * @param {number} start - the index at which to start extracting data. The first row in the dataset is row 0.
 * @param {number} end - the index at which to stop extracting data. The row at this index will not be part of the result.
 * @returns {Promise<object[]>|object[]}
 */

/**
 * Returns a record by its identifier. This can not be a promise, but it should normally only be invoked for records that have
 * already previously been fetched through {@link DataSource#getData}.
 * @function DataSource#getRecordById
 * @param {string|number} id - the identifier of the row to return
 * @returns {object}
 */

/**
 * Changes a value in the dataset. Implementing this method is optional, and only required if the grid should be editable
 * using the {@link Editing} extension.
 * @function DataSource#setValue
 * @param {string|number} rowId - the id of the row to change.
 * @param {string} key - the name of the property that should get the new value
 * @param {*} value - the value to change that property to
 */

/**
 * Applies a sorting to the dataset. Optional. See {@link Sorting} for more information.
 * @function DataSource#sort
 * @param {function(a,b)} comparator - the comparator function to use when sorting
 * @param {object} order - the sort order
 */
