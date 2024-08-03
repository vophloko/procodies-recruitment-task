<script setup lang="ts">
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";

const formSchema = toTypedSchema(
  z.object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters long")
      .max(50, "First name must be at most 50 characters long"),

    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters long")
      .max(50, "Last name must be at most 50 characters long"),

    street: z
      .string()
      .min(2, "Street must be at least 2 characters long")
      .max(100, "Street must be at most 100 characters long"), // Increased the max length for street

    postalCode: z
      .string()
      .regex(/^\d{5}(-\d{4})?$/, "Invalid postal code format"), // US postal code (5 digits or 5+4 digits)

    city: z
      .string()
      .min(2, "City must be at least 2 characters long")
      .max(50, "City must be at most 50 characters long"),

    phoneNumber: z
      .string()
      .regex(/^\+?[1-9]\d{1,14}$/, "Invalid phone number format"), // E.164 format for international phone numbers

    email: z.string().email("Invalid email format"),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>

<template>
  <div
    class="rounded-[20px] border border-brand-gray-1 p-6 flex flex-col gap-6"
  >
    <h3 class="text-xxl font-medium text-primary-1 text-center">
      Enter details
    </h3>
    <form class="w-full grid grid-cols-2 gap-[15px]" @submit="onSubmit">
      <UiFormField v-slot="{ componentField }" name="firstName">
        <UiFormItem>
          <UiFormLabel class="hidden">First name</UiFormLabel>
          <UiFormControl>
            <UiInput
              type="text"
              placeholder="First name"
              v-bind="componentField"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="lastName">
        <UiFormItem>
          <UiFormLabel class="hidden">Last name</UiFormLabel>
          <UiFormControl>
            <UiInput
              type="text"
              placeholder="Last name"
              v-bind="componentField"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="street">
        <UiFormItem class="col-span-2">
          <UiFormLabel class="hidden">Street</UiFormLabel>
          <UiFormControl>
            <UiInput type="text" placeholder="Street" v-bind="componentField" />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="postalCode">
        <UiFormItem>
          <UiFormLabel class="hidden">Postal code</UiFormLabel>
          <UiFormControl>
            <UiInput
              type="text"
              placeholder="Postal code"
              v-bind="componentField"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="city">
        <UiFormItem>
          <UiFormLabel class="hidden">City</UiFormLabel>
          <UiFormControl>
            <UiInput type="text" placeholder="City" v-bind="componentField" />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="phoneNumber">
        <UiFormItem class="col-span-2">
          <UiFormLabel class="hidden">Phone number</UiFormLabel>
          <UiFormControl>
            <UiInput
              type="text"
              placeholder="Phone number"
              v-bind="componentField"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="email">
        <UiFormItem class="col-span-2">
          <UiFormLabel class="hidden">E-mail</UiFormLabel>
          <UiFormControl>
            <UiInput type="text" placeholder="E-mail" v-bind="componentField" />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiButton class="col-span-2 uppercase px-3" type="submit">
        Proceed to payment
      </UiButton>
    </form>
    <div class="flex gap-4 mx-auto h-[40px]">
      <img class="object-contain w-[93.33px]" src="/img/_1.png" alt="" />
      <img class="object-contain w-[93.33px]" src="/img/_2.png" alt="" />
      <img class="object-contain w-[93.33px]" src="/img/_3.png" alt="" />
    </div>
  </div>
</template>
