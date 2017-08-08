// Copyright 2015, EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Catalog ls',
    injectableName: 'Task.Catalog.Ls',
    implementsTask: 'Task.Base.Linux.Catalog',
    options: {
        commands: [
            'ls -l'
        ]
    },
    properties: {
        catalog: {
            type: 'ls'
        }
    }
};
