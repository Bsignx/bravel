import { useForm } from 'react-hook-form'

import { Typography, Select, Button, TextField } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import { Layout } from '@components/layout'
import { Categories } from '@domain/index'
import { useCreateGroup } from '@features/group'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMemo } from 'react'

type FormData = {
  name: string
  category: string
  location: string
  image_url?: string
  description: string
}

const newGroupSchema = yup.object({
  name: yup.string().required('Name is required'),
  category: yup.string().required('Category is required'),
  location: yup.string().required('Location is required'),
  description: yup.string().required('Description is required'),
  image_url: yup.string().url('Invalid URL'),
})

type NewGroupTemplateProps = {
  categories: Categories | undefined
}

export const NewGroupTemplate = ({ categories }: NewGroupTemplateProps) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset: resetForm,
  } = useForm<FormData>({
    resolver: yupResolver(newGroupSchema),
  })

  const { mutateAsync: createGroup } = useCreateGroup()

  const categoriesOptions = useMemo(
    () =>
      categories?.map(({ name }) => ({
        label: name,
        value: name,
      })) ?? [],
    [categories]
  )

  const onSubmit = (data: FormData) => {
    createGroup({
      group: data,
    })

    resetForm()
  }

  return (
    <Layout>
      <Container as="main">
        <Typography variant="h3" className="font-medium !text-gray700">
          New Group
        </Typography>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mt-9 mb-32 max-w-full md:max-w-[50%]"
        >
          <TextField
            label="Name*"
            placeholder="Group name"
            wrapperClassName="mb-6"
            {...register('name')}
            error={errors.name?.message}
          />

          <Select
            options={categoriesOptions}
            label="Category*"
            className="!w-full"
            {...register('category')}
            error={errors.category?.message}
          />
          <TextField
            label="Location*"
            placeholder="Group location"
            wrapperClassName="mt-6"
            {...register('location')}
            error={errors.location?.message}
          />
          <TextField
            label="Cover image url"
            placeholder="Cover image url"
            wrapperClassName="mt-6"
            {...register('image_url')}
            error={errors.image_url?.message}
          />

          <TextField
            label="Description*"
            isTextarea
            placeholder="Group description"
            wrapperClassName="mt-6"
            inputClassName="h-32"
            {...register('description')}
            error={errors.description?.message}
          />
          <Button type="submit" fullWidth className="mt-11">
            Create group
          </Button>
        </form>
      </Container>
    </Layout>
  )
}
