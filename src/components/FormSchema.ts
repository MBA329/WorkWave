import {z} from 'zod';

export const jobFormSchema = z.object({
    id:z.string().nonempty("Job id is required"),
    title:z.string().nonempty("job title is required"),
    type:z.enum(["Full-time","part-time","contract","internship"],
        { errorMap:()=>({message:"Please select a valid job type"})} 
    ),
    description:z.string().nonempty("Job description is required"),
    location:z.string().nonempty("Location is required"),
    salary:z.enum(
        ["Under $50K",
      "$50K - $60K",
      "$60K - $70K",
      "$70K - $80K",
      "$80K - $90K",
      "$90K - $100K",
      "$100K - $110K",
      "$110K - $120K",
      "Over $120K",]
        ,{errorMap:( )=>({message:"Please select a valid salary range"}),}),
        company:z.object({
            name:z.string().nonempty("Company name is required"),
            description:z.string().nonempty("company description is required"),
                contactEmail:z.string().nonempty("contact email is required").
                email("invaid email address"),
                contactPhone:z.string()
        })
        })

