import { createSelector } from 'reselect';


const selectorDirectory = state => state.directory;

export const selectorDirectorySections = createSelector(
    [selectorDirectory],
    directory => directory.sections
);