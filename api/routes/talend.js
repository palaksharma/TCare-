const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/authCheck')

router.get('/', checkAuth, (req, res, next) => {
    var id = req.query.id;
    console.log(id);
    if (id == "20-5-2019") {
        return res.status(200).json({
            labels: ["Executed_Jobs", "Failed_Jobs"],
            "jobs": [{
                    "id": 1,
                    "job_names": "daily_atd_sro_E2E_job",
                    "src_count": 50168,
                    "tgt_count": 50144,
                    "rejects_count": 24,
                    "status": "Success",
                    "start_time": "5/ 20 / 2019"
                },
                {
                    "id": 2,
                    "job_names": "daily_ASSESOR_E2E_job",
                    "src_count": 772,
                    "tgt_count": 772,
                    "rejects_count": 0,
                    "status": "Success",
                    "start_time": "5/ 20 / 2019"
                },
                {
                    "id": 3,
                    "job_names": "daily_IQM_E2E_job",
                    "src_count": 21895,
                    "tgt_count": 21887,
                    "rejects_count": 8,
                    "status": "Success",
                    "start_time": "5/ 20 / 2019"
                },
                {
                    "id": 4,
                    "job_names": "daily_bw_epqr_E2E_job",
                    "src_count": 1640,
                    "tgt_count": 959,
                    "rejects_count": 0,
                    "status": "Fail",
                    "start_time": "5/ 20 / 2019"
                },
                {
                    "id": 5,
                    "job_names": "daily_sword_E2E_job",
                    "src_count": 19649,
                    "tgt_count": 19649,
                    "rejects_count": 0,
                    "status": "Success",
                    "start_time": "5/ 20 / 2019"
                },
                {
                    "id": 6,
                    "job_names": "daily_bw_E2E_job",
                    "src_count": 1640,
                    "tgt_count": 1640,
                    "rejects_count": 0,
                    "status": "Success",
                    "start_time": "5/ 20 / 2019"
                },
                {
                    "id": 7,
                    "job_names": "daily_bw_E2E_job",
                    "src_count": 115233,
                    "tgt_count": 35046,
                    "rejects_count": 71030,
                    "status": "Fail",
                    "start_time": "5/ 20 / 2019"
                },
                {
                    "id": 8,
                    "job_names": "daily_bw_E2E_job",
                    "src_count": 25014,
                    "tgt_count": 6561,
                    "rejects_count": 0,
                    "status": "Fail",
                    "start_time": "5/ 20 / 2019"
                },
            ],
            failedJobs: [
                8,
                3
            ],
            message: "Successfully data devlivered"

        })
    } else if (id == "21-5-2019") {
        return res.status(200).json({
            labels: ["Executed_Jobs", "Failed_Jobs"],
            "jobs": [{
                    "id": 1,
                    "job_names": "daily_atd_sro_E2E_job",
                    "src_count": 50168,
                    "tgt_count": 50144,
                    "rejects_count": 24,
                    "status": "Fail",
                    "start_time": "5/ 21 / 2019"
                },
                {
                    "id": 2,
                    "job_names": "daily_ASSESOR_E2E_job",
                    "src_count": 772,
                    "tgt_count": 772,
                    "rejects_count": 0,
                    "status": "Fail",
                    "start_time": "5/ 21 / 2019"
                },
                {
                    "id": 3,
                    "job_names": "daily_IQM_E2E_job",
                    "src_count": 21895,
                    "tgt_count": 21887,
                    "rejects_count": 8,
                    "status": "Fail",
                    "start_time": "5/ 21 / 2019"
                },
                {
                    "id": 4,
                    "job_names": "daily_bw_epqr_E2E_job",
                    "src_count": 1640,
                    "tgt_count": 959,
                    "rejects_count": 0,
                    "status": "Fail",
                    "start_time": "5/ 21 / 2019"
                },
                {
                    "id": 5,
                    "job_names": "daily_sword_E2E_job",
                    "src_count": 19649,
                    "tgt_count": 19649,
                    "rejects_count": 0,
                    "status": "Success",
                    "start_time": "5/ 21 / 2019"
                },
                {
                    "id": 6,
                    "job_names": "daily_bw_E2E_job",
                    "src_count": 1640,
                    "tgt_count": 1640,
                    "rejects_count": 0,
                    "status": "Success",
                    "start_time": "5/ 21 / 2019"
                },
                {
                    "id": 7,
                    "job_names": "daily_bw_E2E_job",
                    "src_count": 115233,
                    "tgt_count": 35046,
                    "rejects_count": 71030,
                    "status": "Fail",
                    "start_time": "5/ 21 / 2019"
                },
                {
                    "id": 8,
                    "job_names": "daily_bw_E2E_job",
                    "src_count": 25014,
                    "tgt_count": 6561,
                    "rejects_count": 0,
                    "status": "Fail",
                    "start_time": "5/ 21 / 2019"
                }

            ],
            failedJobs: [
                8,
                6
            ],
            message: "Successfully data devlivered"

        })

    } else if (id == "17-5-2019") {
        return res.status(200).json({
            labels: ["Executed_Jobs", "Failed_Jobs"],
            failedJobs: [
                8,
                3
            ],
            "jobs": [{
                    "id": 1,
                    "job_names": "daily_atd_sro_E2E_job",
                    "src_count": 50168,
                    "tgt_count": 50144,
                    "rejects_count": 24,
                    "status": "Fail",
                    "start_time": "5/ 17 / 2019"
                },
                {
                    "id": 2,
                    "job_names": "daily_ASSESOR_E2E_job",
                    "src_count": 772,
                    "tgt_count": 772,
                    "rejects_count": 0,
                    "status": "Fail",
                    "start_time": "5/ 17 / 2019"
                },
                {
                    "id": 3,
                    "job_names": "daily_IQM_E2E_job",
                    "src_count": 21895,
                    "tgt_count": 21887,
                    "rejects_count": 8,
                    "status": "Fail",
                    "start_time": "5/ 17 / 2019"
                },
                {
                    "id": 4,
                    "job_names": "daily_bw_epqr_E2E_job",
                    "src_count": 1640,
                    "tgt_count": 959,
                    "rejects_count": 0,
                    "status": "Fail",
                    "start_time": "5/ 17 / 2019"
                },
                {
                    "id": 5,
                    "job_names": "daily_sword_E2E_job",
                    "src_count": 19649,
                    "tgt_count": 19649,
                    "rejects_count": 0,
                    "status": "Success",
                    "start_time": "5/ 17 / 2019"
                },
                {
                    "id": 6,
                    "job_names": "daily_bw_E2E_job",
                    "src_count": 1640,
                    "tgt_count": 1640,
                    "rejects_count": 0,
                    "status": "Success",
                    "start_time": "5/ 17 / 2019"
                },
                {
                    "id": 7,
                    "job_names": "daily_bw_E2E_job",
                    "src_count": 115233,
                    "tgt_count": 35046,
                    "rejects_count": 71030,
                    "status": "Success",
                    "start_time": "5/ 17 / 2019"
                },
                {
                    "id": 8,
                    "job_names": "daily_bw_E2E_job",
                    "src_count": 25014,
                    "tgt_count": 6561,
                    "rejects_count": 0,
                    "status": "Success",
                    "start_time": "5/ 17 / 2019"
                }
            ],

            message: "Successfully data devlivered"

        })

    } else {
        res.send("No Data Found");
    }
})

router.post('/', checkAuth, (req, res, next) => {
    return res.status(200).json({
        "jobs": [{
                "id": 1,
                "Source": "Bollywood",
                "e2e_job_name": "daily_bw_E2E_job",
                "job_name": [{
                        "name": "job_jlr_stg_to_dw_bw_business_rule_delta",
                        "status": "success",
                        "start_time": "5/17/2019 9:01",
                        "end_time": "5/17/2019 9:01"
                    }, {
                        "name": "job_jlr_stg_to_dw_bw_claim_saved_delta",
                        "status": "success",
                        "start_time": "5/17/2019 9:01",
                        "end_time": "5/17/2019 9:01"
                    }, {
                        "name": "job_jlr_stg_to_dw_bw_cond_delta",
                        "status": "success",
                        "start_time": "5/17/2019 9:01",
                        "end_time": "5/17/2019 9:01"
                    }, {
                        "name": "job_jlr_stg_to_dw_bw_causal_part_delta",
                        "status": "success",
                        "start_time": "5/17/2019 9:01",
                        "end_time": "5/17/2019 9:01"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_business_rule_delta",
                        "status": "success",
                        "start_time": "5/17/2019 9:01",
                        "end_time": "5/17/2019 9:01"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_claim_saved_delta",
                        "status": "success",
                        "start_time": "5/17/2019 9:01",
                        "end_time": "5/17/2019 9:01"
                    }, {
                        "name": "job_jlr_stg_to_dw_bw_cond_delta",
                        "status": "success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_causal_part_delta",
                        "status": "success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_claim_verbatim_delta",
                        "status": "success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_area_delta",
                        "status": "success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_claim_step_delta",
                        "status": "Fail",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_claim_step_amount_delta_1",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_claim_step_amount_delta_1",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_vehicle_delta",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_claim_related_delta",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_epqr_delta",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_ccc_hierarchy_delta",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_dealer_delta",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_region_delta",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_country_delta",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_claim_event_amount_delta",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_claim_delta",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_claim_event_detail_delta",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_sro_delta",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_bw_claim_business_rule_delta",
                        "status": "Success",
                        "start_time": "5/17/2019 9:02",
                        "end_time": "5/17/2019 9:02"
                    }
                ],
            },
            {
                "id": 2,
                "Source": "Caesar",
                "e2e_job_name": "daily_IQM_E2E_job",
                "job_name": [{
                        "name": " job_jlr_stg_to_dw_cs_ordertofeature",
                        "status": "success",
                        "start_time": "5/17/2019 7:50",
                        "end_time": "	5/17/2019 7:50"
                    }, {
                        "name": "job_jlr_stg_to_dw_cs_attribute",
                        "status": "success",
                        "start_time": "5/17/2019 7:50",
                        "end_time": "	5/17/2019 7:50"
                    }, {
                        "name": "job_jlr_stg_to_dw_cs_psw",
                        "status": "success",
                        "start_time": "5/17/2019 7:50",
                        "end_time": "	5/17/2019 7:50"
                    }, {
                        "name": "job_jlr_stg_to_dw_cs_vintofeature",
                        "status": "success",
                        "start_time": "5/17/2019 7:50",
                        "end_time": "	5/17/2019 7:50"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_cs_warranty",
                        "status": "success",
                        "start_time": "5/17/2019 9:01",
                        "end_time": "5/17/2019 9:01"
                    },

                ],
            },
            {
                "id": 3,
                "Source": "IQM",
                "e2e_job_name": "daily_IQM_E2E_job",
                "job_name": [{
                        "name": " job_jlr_stg_to_dw_iqm_projects",
                        "status": "success",
                        "start_time": "5/17/2019 7:50",
                        "end_time": "	5/17/2019 7:50"
                    }, {
                        "name": "job_jlr_stg_to_dw_paws_jdpower",
                        "status": "success",
                        "start_time": "5/17/2019 7:50",
                        "end_time": "	5/17/2019 7:50"
                    }, {
                        "name": "job_jlr_stg_to_dw_paws_ncbs",
                        "status": "success",
                        "start_time": "5/17/2019 7:50",
                        "end_time": "	5/17/2019 7:50"
                    }, {
                        "name": "job_jlr_stg_to_dw_paws_rsa",
                        "status": "success",
                        "start_time": "5/17/2019 7:50",
                        "end_time": "	5/17/2019 7:50"
                    },
                    {
                        "name": "job_jlr_stg_to_dw_paws_tgw",
                        "status": "success",
                        "start_time": "5/17/2019 7:50",
                        "end_time": "	5/17/2019 7:50"
                    },
                ],
            },
            {
                "id": 3,
                "Source": "Sword",
                "e2e_job_name": "daily_sword_E2E_job",
                "job_name": [{
                    "name": " job_jlr_stg_to_dw_sword_parts_return",
                    "status": "success",
                    "start_time": "5/17/2019 7:50",
                    "end_time": "	5/17/2019 7:50"
                }],
            },
        ]

    })


})



module.exports = router;