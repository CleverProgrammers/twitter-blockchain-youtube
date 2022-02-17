import { Dispatch, SetStateAction } from 'react'
import { GiEarthAmerica } from 'react-icons/gi'

const style = {
  wrapper: `h-[20rem] w-[35rem] text-white bg-[#15202b] rounded-3xl p-10 flex flex-col`,
  inputFieldsContainer: `flex-1`,
  inputContainer: `mb-4`,
  fileInput: `hidden`,
  input: `bg-transparent outline-none text-xl w-full`,
  customInput: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  fileSelected: `bg-[#2b6127] text-white px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  lower: `flex justify-between items-center`,
  visibility: `flex items-center text-[#1d9bf0] text-sm font-bold`,
  visibilityText: `ml-2`,
  mintButton: `bg-white text-black px-3 py-1 rounded-full hover:bg-[#8899a6] cursor-pointer`,
  inactiveMintButton: `text-black px-3 py-1 rounded-full bg-[#8899a6]`,
}

interface InitialStateProps {
  profileImage: File
  setProfileImage: Dispatch<SetStateAction<File | undefined>>
  name: string
  setName: Dispatch<SetStateAction<string>>
  description: string
  setDescription: Dispatch<SetStateAction<string>>
  mint: Function
}

const InitialState = ({
  profileImage,
  setProfileImage,
  name,
  setName,
  description,
  setDescription,
  mint,
}: InitialStateProps) => {
  console.log(profileImage)

  return (
    <div className={style.wrapper}>
      <div className={style.inputFieldsContainer}>
        <div className={style.inputContainer}>
          <label
            htmlFor='image-upload'
            className={profileImage ? style.fileSelected : style.customInput}
          >
            <input
              type='file'
              id='image-upload'
              accept='.jpg, .jpeg, .png'
              className={style.fileInput}
              placeholder='Image URL'
              onChange={e => setProfileImage(e.target.files![0])}
            />
            Select File
          </label>
        </div>
        <div className={style.inputContainer}>
          <input
            type='text'
            className={style.input}
            placeholder='Title of Image'
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div className={style.inputContainer}>
          <input
            type='text'
            className={style.input}
            placeholder='Description'
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
        </div>
      </div>
      <div className={style.lower}>
        <div className={style.visibility}>
          <GiEarthAmerica />
          <span className={style.visibilityText}>Everyone can see this</span>
        </div>
        <div
          className={
            name && description && profileImage
              ? style.mintButton
              : style.inactiveMintButton
          }
          onClick={() => {
            if (name && description && profileImage) {
              mint()
            }
          }}
        >
          Mint
        </div>
      </div>
    </div>
  )
}

export default InitialState
