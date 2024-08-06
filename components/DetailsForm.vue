<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import * as z from 'zod'

const { t } = useI18n()

const formSchema = toTypedSchema(
  z.object({
    firstName: z
      .string()
      .min(2, t('detailsForm.form.firstName.min'))
      .max(50, t('detailsForm.form.firstName.max')),
    lastName: z
      .string()
      .min(2, t('detailsForm.form.lastName.min'))
      .max(50, t('detailsForm.form.lastName.max')),
    street: z
      .string()
      .min(2, t('detailsForm.form.street.min'))
      .max(100, t('detailsForm.form.street.max')),
    postalCode: z
      .string()
      .regex(/^\d{5}(-\d{4})?$/, t('detailsForm.form.postalCode.regex')), // US postal code (5 digits or 5+4 digits)
    city: z
      .string()
      .min(2, t('detailsForm.form.city.min'))
      .max(50, t('detailsForm.form.city.max')),
    phoneNumber: z
      .string()
      .regex(/^\+?[1-9]\d{1,14}$/, t('detailsForm.form.phoneNumber.regex')), // E.164 format for international phone numbers
    email: z.string().email(t('detailsForm.form.email.email')),
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
      {{ $t("detailsForm.title") }}
    </span>
    <form class="w-full grid grid-cols-2 gap-4" @submit="onSubmit">
      <UiFormField v-slot="{ componentField }" name="firstName">
        <UiFormItem>
          <UiFormLabel class="hidden">
            {{ $t("detailsForm.form.firstName.label") }}
          </UiFormLabel>
          <UiFormControl>
            <UiInput
              autofocus
              type="text"
              :placeholder="t('detailsForm.form.firstName.label')"
              v-bind="componentField"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="lastName">
        <UiFormItem>
          <UiFormLabel class="hidden">
            {{ $t("detailsForm.form.lastName.label") }}
          </UiFormLabel>
          <UiFormControl>
            <UiInput
              type="text"
              :placeholder="t('detailsForm.form.lastName.label')"
              v-bind="componentField"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="street">
        <UiFormItem class="col-span-2">
          <UiFormLabel class="hidden">
            {{ $t("detailsForm.form.street.label") }}
          </UiFormLabel>
          <UiFormControl>
            <UiInput
              type="text"
              :placeholder="t('detailsForm.form.street.label')"
              v-bind="componentField"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="postalCode">
        <UiFormItem>
          <UiFormLabel class="hidden">
            {{ $t("detailsForm.form.postalCode.label") }}
          </UiFormLabel>
          <UiFormControl>
            <UiInput
              type="text"
              :placeholder="t('detailsForm.form.postalCode.label')"
              v-bind="componentField"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="city">
        <UiFormItem>
          <UiFormLabel class="hidden">
            {{ $t("detailsForm.form.city.label") }}
          </UiFormLabel>
          <UiFormControl>
            <UiInput
              type="text"
              :placeholder="t('detailsForm.form.city.label')"
              v-bind="componentField"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="phoneNumber">
        <UiFormItem class="col-span-2">
          <UiFormLabel class="hidden">
            {{ $t("detailsForm.form.phoneNumber.label") }}
          </UiFormLabel>
          <UiFormControl>
            <UiInput
              type="tel"
              :placeholder="t('detailsForm.form.phoneNumber.label')"
              v-bind="componentField"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiFormField v-slot="{ componentField }" name="email">
        <UiFormItem class="col-span-2">
          <UiFormLabel class="hidden">
            {{ $t("detailsForm.form.email.label") }}
          </UiFormLabel>
          <UiFormControl>
            <UiInput
              type="email"
              :placeholder="t('detailsForm.form.email.label')"
              v-bind="componentField"
            />
          </UiFormControl>
          <UiFormMessage />
        </UiFormItem>
      </UiFormField>
      <UiButton class="col-span-2 uppercase px-3" type="submit">
        {{ $t("detailsForm.form.submit") }}
      </UiButton>
    </form>
    <div class="flex gap-4 mx-auto h-[40px]">
      <NuxtImg
        class="object-contain w-[93.33px]"
        src="/img/payment-protection/mc-afee.webp"
        :alt="t('img.paymentProtection.mcAfee')"
        width="140"
        height="60"
      />
      <NuxtImg
        class="object-contain w-[93.33px]"
        src="/img/payment-protection/trust-e.webp"
        :alt="t('img.paymentProtection.trustE')"
        width="140"
        height="60"
      />
      <NuxtImg
        class="object-contain w-[93.33px]"
        src="/img/payment-protection/ssl.webp"
        :alt="t('img.paymentProtection.ssl')"
        width="415"
        height="172"
      />
    </div>
  </div>
</template>
