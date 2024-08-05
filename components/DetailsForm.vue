<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const formSchema = toTypedSchema(
  z.object({
    firstName: z
      .string()
      .min(2, 'First name must be at least 2 characters long')
      .max(50, 'First name must be at most 50 characters long'),

    lastName: z
      .string()
      .min(2, 'Last name must be at least 2 characters long')
      .max(50, 'Last name must be at most 50 characters long'),

    street: z
      .string()
      .min(2, 'Street must be at least 2 characters long')
      .max(100, 'Street must be at most 100 characters long'),

    postalCode: z
      .string()
      .regex(/^\d{5}(-\d{4})?$/, 'Invalid postal code format'), // US postal code (5 digits or 5+4 digits)

    city: z
      .string()
      .min(2, 'City must be at least 2 characters long')
      .max(50, 'City must be at most 50 characters long'),

    phoneNumber: z
      .string()
      .regex(/^\+?[1-9]\d{1,14}$/, 'Invalid phone number format'), // E.164 format for international phone numbers

    email: z.string().email('Invalid email format'),
  }),
)

const form = useForm({
  validationSchema: formSchema,
})

const onSubmit = form.handleSubmit(() => {
  //
})
</script>

<template>
  <div
    class="rounded-[20px] border border-brand-gray-1 p-6 flex flex-col gap-6"
  >
    <span class="block text-2xl font-medium text-primary-1 text-center">
      Enter details
    </span>
    <form class="w-full grid grid-cols-2 gap-4" @submit="onSubmit">
      <UiFormField v-slot="{ componentField }" name="firstName">
        <UiFormItem>
          <UiFormLabel class="hidden">
            First name
          </UiFormLabel>
          <UiFormControl>
            <UiInput
              autofocus
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
          <UiFormLabel class="hidden">
            Last name
          </UiFormLabel>
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
          <UiFormLabel class="hidden">
            Street
          </UiFormLabel>
          <UiFormControl>
            <UiInput type="text" placeholder="Street" v-bind="componentField" />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="postalCode">
        <UiFormItem>
          <UiFormLabel class="hidden">
            Postal code
          </UiFormLabel>
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
          <UiFormLabel class="hidden">
            City
          </UiFormLabel>
          <UiFormControl>
            <UiInput type="text" placeholder="City" v-bind="componentField" />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="phoneNumber">
        <UiFormItem class="col-span-2">
          <UiFormLabel class="hidden">
            Phone number
          </UiFormLabel>
          <UiFormControl>
            <UiInput
              type="tel"
              placeholder="Phone number"
              v-bind="componentField"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="email">
        <UiFormItem class="col-span-2">
          <UiFormLabel class="hidden">
            E-mail
          </UiFormLabel>
          <UiFormControl>
            <UiInput
              type="email"
              placeholder="E-mail"
              v-bind="componentField"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiButton class="col-span-2 uppercase px-3" type="submit">
        Proceed to payment
      </UiButton>
    </form>
    <div class="flex gap-4 mx-auto h-[40px]">
      <NuxtImg
        class="object-contain w-[93.33px]"
        src="/img/payment-protection/mc-afee.webp"
        alt="McAfee secure"
        width="140"
        height="60"
      />
      <NuxtImg
        class="object-contain w-[93.33px]"
        src="/img/payment-protection/trust-e.webp"
        alt="Trust E verified"
        width="140"
        height="60"
      />
      <NuxtImg
        class="object-contain w-[93.33px]"
        src="/img/payment-protection/ssl.webp"
        alt="256 bit encryption"
        width="415"
        height="172"
      />
    </div>
  </div>
</template>
