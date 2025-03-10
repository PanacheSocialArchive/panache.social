import React from 'react'
import { AuthLayout } from '#auth/ui/components/auth_layout'
import { SignUpForm } from '#auth/ui/components/sign_up_form'
import { Head } from '@inertiajs/react'
import useTranslate from '#common/ui/hooks/use_translate'

export default function SignUpPage() {
  const t = useTranslate('auth')

  return (
    <>
      <Head title={t('sign_up')} />
      <AuthLayout>
        <SignUpForm />
      </AuthLayout>
    </>
  )
}
