"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.servicesDelete = void 0;
const helper_1 = __importDefault(require("../../../config/helper"));
const servicesDelete = async (req, res) => {
    const { id } = req.params;
    try {
        // Delete the service and related data
        await helper_1.default.services.delete({
            where: {
                id: id,
            },
        });
        // Delete related data from other tables
        await helper_1.default.term.deleteMany({
            where: {
                ServiceId: id,
            },
        });
        await helper_1.default.availableDays.deleteMany({
            where: {
                ServiceId: id,
            },
        });
        await helper_1.default.location.deleteMany({
            where: {
                ServiceId: id,
            },
        });
        await helper_1.default.coustmer_details.deleteMany({
            where: {
                ServiceId: id,
            },
        });
        // await prisma.questionSchema.deleteMany({
        //   where: {
        //     ServiceId: serviceId,
        //   },
        // });
        await helper_1.default.assignTo.deleteMany({
            where: {
                ServiceId: id,
            },
        });
        await helper_1.default.estimate.deleteMany({
            where: {
                ServiceId: id,
            },
        });
        res.status(200).json({
            message: "Service and related data deleted successfully",
        });
    }
    catch (error) {
        console.log(error);
        res.status(500).send(error.message);
    }
};
exports.servicesDelete = servicesDelete;
//# sourceMappingURL=services_delete_controller.js.map