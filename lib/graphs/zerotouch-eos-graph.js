// Copyright 2015, EMC, Inc.

'use strict';

module.exports = {
    friendlyName: 'Zerotouch EOS Graph',
    injectableName: 'Graph.Arista.Zerotouch.EOS',
    tasks: [
        {
            label: 'zerotouch-eos',
            taskDefinition: {
                friendlyName: 'Arista Zerotouch EOS',
                injectableName: 'Task.Inline.Arista.Zerotouch.EOS',
                implementsTask: 'Task.Base.Arista.Zerotouch',
                options: {
                    profile: 'zerotouch-configure.zt',
                    bootConfig: 'arista-boot-config',
                    startupConfig: 'arista-startup-config',
                    eosImage: 'common/EOS-4.10.8.1.swi',
                    bootfile: 'EOS-4.10.8.1.swi',
                    hostname: 'RenasarVEOS',
                    bootstrapScript:  'get-macs.zt'
                },
                properties: {
                    os: {
                        switch: {
                            type: 'EOS',
                            virtual: false 
                        }
                    }
                }
            }
        }
    ]
};
