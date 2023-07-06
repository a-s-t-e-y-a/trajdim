"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coustmerGet = exports.servicesGetUnique = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const bluebird_1 = require("bluebird");
const servicesGetUnique = async (req, res) => {
    try {
        const services = await helper_1.default.services.findMany({
            where: {
                id: req.params.id,
                user: req.user.id,
            },
        });
        const termPromises = services.map((service) => helper_1.default.term.findMany({
            where: {
                ServiceId: service.id,
            },
        }));
        const termResults = await bluebird_1.Promise.all(termPromises);
        const availableDaysPromises = services.map((service) => helper_1.default.availableDays.findMany({
            where: {
                ServiceId: service.id,
            },
        }));
        const availableDaysResults = await bluebird_1.Promise.all(availableDaysPromises);
        const locationPromises = services.map((service) => helper_1.default.location.findMany({
            where: {
                ServiceId: service.id,
            },
        }));
        const locationResults = await bluebird_1.Promise.all(locationPromises);
        const coustmerDetailsPromises = services.map((service) => helper_1.default.coustmer_details.findMany({
            where: {
                ServiceId: service.id,
            },
        }));
        const coustmerDetailsResults = await bluebird_1.Promise.all(coustmerDetailsPromises);
        // const questionSchemaPromises = services.map((service) =>
        //   prisma.questionSchema.findMany({
        //     where: {
        //       ServiceId: service.id,
        //     },
        //   })
        // );
        // const questionSchemaResults = await Promise.all(questionSchemaPromises);
        const assignToPromises = services.map((service) => helper_1.default.assignTo.findMany({
            where: {
                ServiceId: service.id,
            },
        }));
        const assignToResults = await bluebird_1.Promise.all(assignToPromises);
        const estimatePromises = services.map((service) => helper_1.default.estimate.findMany({
            where: {
                ServiceId: service.id,
            },
        }));
        const estimateResults = await bluebird_1.Promise.all(estimatePromises);
        const serviceData = services.map((service, index) => ({
            services: service,
            term: termResults[index],
            availableDays: availableDaysResults[index],
            location: locationResults[index],
            coustmer_details: coustmerDetailsResults[index],
            // questionSchema: questionSchemaResults[index],
            assignTo: assignToResults[index],
            estimate: estimateResults[index],
        }));
        res.status(200).json({
            message: "Service data retrieved successfully",
            data: serviceData,
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};
exports.servicesGetUnique = servicesGetUnique;
const coustmerGet = async (req, res) => {
    const id = req.params.id;
    try {
        const coustmerDetailsPromises = helper_1.default.coustmer_details.findMany({
            where: {
                ServiceId: id,
            },
        });
        res.status(200).json({
            message: "Coustmer data send",
            data: coustmerDetailsPromises,
        });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
};
exports.coustmerGet = coustmerGet;
//# sourceMappingURL=services_get_unique_controller.js.map