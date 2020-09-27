const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/authCheck')

router.get('/', (req, res, next) => {
    res.status(200).json({
        "data": [{
                id: 1,
                name: 'D0-common-conf',
                children: [
                    { name: 'use-case : Data-Vault' },
                    { name: 'prcs-name : curated_to_enrich' },
                    { name: 'logging-level : DEBUG' }
                ]
            },
            {
                id: 4,
                name: 'D1-data-extract-process',
                children: [
                    { name: 'type : data-extract-process' },
                    {
                        id: 6,
                        name: 'sourceList',
                        children: [{
                                name: 'source1',
                                children: [
                                    { name: "type: curated-zone" },
                                    { name: "read-type : batch-date-single" },
                                    { name: "path : /funds/" },
                                    { name: "fileName : funds_master_l1" },
                                    { name: "drop-duplicates : true" },
                                    {
                                        name: "cols",
                                        children: [
                                            { name: "fund_id" },
                                            { name: "description" },
                                            { name: "SRC_ID" },
                                            { name: "BATCH_ID" }
                                        ]

                                    }
                                ]
                            },
                            {
                                name: 'source2',
                                children: [
                                    { name: "type: curated-zone" },
                                    { name: "read-type : batch-date-single" },
                                    { name: "path : /funds/" },
                                    { name: "fileName : funds_master_l1" },
                                    { name: "drop-duplicates : true" },
                                    { name: " max_batchdate_flag:  True" },
                                    {
                                        name: "cols",
                                        children: [
                                            { name: "fund_id" },
                                            { name: "description" },
                                            { name: "SRC_ID" },
                                            { name: "BATCH_ID" }
                                        ]
                                    },
                                    {
                                        name: "combine",
                                        children: [
                                            { name: "type : union" },
                                            { name: "unionType : direct" }
                                        ]
                                    },
                                ]
                            },
                            { name: 'source3' },
                            { name: 'source4' },
                            { name: 'source5' },
                            { name: 'source6' },


                        ]
                    }
                ]

            }
        ]
    })
})

module.exports = router;