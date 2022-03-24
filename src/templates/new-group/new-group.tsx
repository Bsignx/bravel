import { useForm } from 'react-hook-form'

import { Typography, Select, Button, TextField } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import { Layout } from '@components/layout'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type FormData = {
  name: string
  category: string
  location: string
  coverImageUrl?: string
  description: string
}

const newGroupSchema = yup.object({
  name: yup.string().required('Name is required'),
  category: yup.string().required('Category is required'),
  location: yup.string().required('Location is required'),
  description: yup.string().required('Description is required'),
  coverImageUrl: yup.string().url('Invalid URL'),
})

export const NewGroupTemplate = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormData>({
    resolver: yupResolver(newGroupSchema),
  })

  const onSubmit = (data: FormData) => {
    alert(JSON.stringify(data))
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
            options={[
              {
                label: 'Category',
                value: 'Group category',
              },
            ]}
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
            {...register('coverImageUrl')}
            error={errors.coverImageUrl?.message}
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
