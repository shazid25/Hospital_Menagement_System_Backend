import { prisma } from "../../lib/prisma"

const getAllDoctors = async () => {
    const doctor = await prisma.doctor.findMany({
        include: {
                specialties: {
                    include: {
                        specialty: true
                    }
                }
            }     
    })

    return doctor;
}

export const DoctorService = {
    getAllDoctors
}