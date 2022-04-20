import dynamic from 'next/dynamic'
import { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { Typography, Select, Button, TextField } from '@bsignx/bravel-ui'
import { Container } from '@components/container'
import { Layout } from '@components/layout'
import { Categories } from '@domain/index'
import { useCreateGroup } from '@features/group'
import { yupResolver } from '@hookform/resolvers/yup'
import { LatLng } from 'leaflet'
import * as yup from 'yup'

type FormData = {
  name: string
  category: string
  location: string
  image_url?: string
  description: string
  position: {
    lat: number
    lng: number
  }
}

const newGroupSchema = yup.object({
  name: yup.string().required('Name is required'),
  category: yup.string().required('Category is required'),
  location: yup.string().required('Location is required'),
  description: yup.string().required('Description is required'),
  image_url: yup.string().url('Invalid URL'),
  position: yup.object({
    lat: yup.number().required('Position is required'),
    lng: yup.number().required('Position is required'),
  }),
})

type NewGroupTemplateProps = {
  categories: Categories | undefined
}

export const NewGroupTemplate = ({ categories }: NewGroupTemplateProps) => {
  const [position, setPosition] = useState<LatLng | null>(null)
  console.log(position)

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset: resetForm,
    setValue,
  } = useForm<FormData>({
    resolver: yupResolver(newGroupSchema),
  })

  const MapWithNoSSR = dynamic(() => import('./map'), {
    ssr: false,
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
    try {
      createGroup({
        group: data,
      })

      resetForm()
      setPosition(null)
      toast.success('Group created successfully')
    } catch (error) {
      toast.error('Error creating group')
    }
  }

  useEffect(() => {
    if (position) {
      setValue('position', position)
    }
  }, [position, setValue])

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
            wrapperClassName="mt-6 mb-6"
            inputClassName="h-32"
            {...register('description')}
            error={errors.description?.message}
          />

          <MapWithNoSSR position={position} onChangePosition={setPosition} />
          {errors.position?.lat?.message && (
            <Typography variant="body2" className="mt-2 text-xs !text-rose500">
              {errors.position.lat.message}
            </Typography>
          )}

          <Button type="submit" fullWidth className="mt-11">
            Create group
          </Button>
        </form>
      </Container>
    </Layout>
  )
}
